// Pure-JS astronomical helpers (approximate) for Moon longitude and Ascendant
// Good for consumer-facing Moon & Rising sign placement (no external libs)

export function toJulianDay(date: Date){
  // date is JS Date in UTC
  const year = date.getUTCFullYear()
  let month = date.getUTCMonth() + 1
  const day = date.getUTCDate() + (date.getUTCHours()/24) + (date.getUTCMinutes()/1440) + (date.getUTCSeconds()/86400)

  let Y = year
  let M = month
  if(M <= 2){ Y = year - 1; M = month + 12 }

  const A = Math.floor(Y/100)
  const B = 2 - A + Math.floor(A/4)
  const JD = Math.floor(365.25*(Y + 4716)) + Math.floor(30.6001*(M+1)) + day + B - 1524.5
  return JD
}

function normalizeAngle(deg: number){
  let a = deg % 360
  if(a < 0) a += 360
  return a
}

function deg2rad(d: number){ return d * Math.PI / 180 }
function rad2deg(r: number){ return r * 180 / Math.PI }

export function zodiacFromDegrees(deg: number){
  const d = normalizeAngle(deg)
  const index = Math.floor(d / 30)
  const signs = ['Aries','Taurus','Gemini','Cancer','Leo','Virgo','Libra','Scorpio','Sagittarius','Capricorn','Aquarius','Pisces']
  const sign = signs[index]
  const degInSign = d - (index * 30)
  return { sign, index, deg: degInSign }
}

export function julianCenturiesSinceJ2000(JD: number){
  return (JD - 2451545.0) / 36525.0
}

export function meanObliquityOfEcliptic(T: number){
  // in degrees, approximate
  return 23.439291 - 0.0130042 * T - 1.64e-7 * T * T + 5.04e-7 * T * T * T
}

export function greenwichMeanSiderealTime(JD: number){
  const T = (JD - 2451545.0) / 36525.0
  let GMST = 280.46061837 + 360.98564736629 * (JD - 2451545) + 0.000387933 * T * T - (T*T*T)/38710000
  return normalizeAngle(GMST)
}

export function moonEclipticLongitudeDeg(JD: number){
  // Approximate Moon longitude using a few periodic terms (sufficient for sign-level accuracy)
  const T = (JD - 2451545.0) / 36525.0
  // Mean elongation of the Moon
  const D = normalizeAngle(297.8501921 + 445267.1114034 * T - 0.0018819 * T*T + (T*T*T)/545868 - (T*T*T*T)/113065000)
  // Sun's mean anomaly
  const M = normalizeAngle(357.5291092 + 35999.0502909 * T - 0.0001536 * T*T + (T*T*T)/24490000)
  // Moon's mean anomaly
  const Mp = normalizeAngle(134.9633964 + 477198.8675055 * T + 0.0087414 * T*T + (T*T*T)/69699 - (T*T*T*T)/14712000)
  // Moon's argument of latitude
  const F = normalizeAngle(93.2720950 + 483202.0175233 * T - 0.0036539 * T*T - (T*T*T)/3526000 + (T*T*T*T)/863310000)

  // Mean longitude of the Moon
  let Lp = normalizeAngle(218.3164477 + 481267.88123421 * T - 0.0015786 * T*T + (T*T*T)/538841 - (T*T*T*T)/65194000)

  // A handful of largest periodic terms (table of terms truncated) — coefficients in degrees
  const terms = [
    {D:0, M:0, Mp:1, F:0, coeff:-6.289},
    {D:2, M:0, Mp:-1, F:0, coeff:1.274},
    {D:2, M:0, Mp:0, F:0, coeff:0.658},
    {D:0, M:0, Mp:2, F:0, coeff:0.213},
    {D:0, M:1, Mp:0, F:0, coeff:-0.185},
    {D:0, M:0, Mp:0, F:2, coeff:-0.114},
    {D:2, M:0, Mp:-2, F:0, coeff:0.058},
    {D:2, M:-1, Mp:-1, F:0, coeff:0.057},
    {D:2, M:0, Mp:1, F:0, coeff:0.053},
  ]

  let sum = 0
  for(const t of terms){
    const arg = deg2rad(t.D*D + t.M*M + t.Mp*Mp + t.F*F)
    sum += t.coeff * Math.sin(arg)
  }

  Lp += sum
  Lp = normalizeAngle(Lp)
  return Lp
}

export function ascendantDeg(JD: number, latDeg: number, lonDeg: number){
  // Compute local sidereal time in degrees
  const GMST = greenwichMeanSiderealTime(JD)
  const LST = normalizeAngle(GMST + lonDeg)

  const T = (JD - 2451545.0) / 36525.0
  const eps = meanObliquityOfEcliptic(T)

  const lstRad = deg2rad(LST)
  const epsRad = deg2rad(eps)
  const latRad = deg2rad(latDeg)

  // Ascendant formula (approximate): compute ecliptic longitude of the Ascendant
  const sinL = Math.sin(lstRad)
  const cosL = Math.cos(lstRad)
  const tanLat = Math.tan(latRad)

  const x = Math.atan2(sinL * Math.cos(epsRad) - tanLat * Math.sin(epsRad), cosL)
  let asc = rad2deg(x)
  // convert from [-180,180] to 0-360
  asc = normalizeAngle(asc)
  return asc
}
