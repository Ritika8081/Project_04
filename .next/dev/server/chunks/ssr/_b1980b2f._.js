module.exports = [
"[project]/components/ZodiacAvatar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZodiacAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
;
function ZodiacAvatar({ sign, compact, size = 72 }) {
    const src = `/constellation-${sign.toLowerCase()}.svg`;
    const s = Number(size) || 72;
    if (compact) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center",
            style: {
                width: s,
                height: s
            },
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: `${sign} constellation`,
                width: s,
                height: s,
                className: "rounded-md object-cover max-w-full h-auto"
            }, void 0, false, {
                fileName: "[project]/components/ZodiacAvatar.tsx",
                lineNumber: 15,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ZodiacAvatar.tsx",
            lineNumber: 14,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: `${sign} constellation`,
                width: s,
                height: s,
                className: "rounded-md max-w-full h-auto"
            }, void 0, false, {
                fileName: "[project]/components/ZodiacAvatar.tsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-semibold",
                    children: sign
                }, void 0, false, {
                    fileName: "[project]/components/ZodiacAvatar.tsx",
                    lineNumber: 24,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ZodiacAvatar.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ZodiacAvatar.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/lib/zodiac.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCompatibility",
    ()=>getCompatibility,
    "getZodiacFromDate",
    ()=>getZodiacFromDate,
    "signToElement",
    ()=>signToElement
]);
const ZODIACS = [
    {
        name: 'Aries',
        start: {
            month: 3,
            day: 21
        },
        end: {
            month: 4,
            day: 19
        },
        insight: 'Aries: Embrace bold choices and gentle action today.',
        habit: 'Do a 3-minute movement to energize yourself.',
        element: 'Fire'
    },
    {
        name: 'Taurus',
        start: {
            month: 4,
            day: 20
        },
        end: {
            month: 5,
            day: 20
        },
        insight: 'Taurus: Ground in comfort and reliable rhythms.',
        habit: 'Tend to one small comfort (tea, blanket).',
        element: 'Earth'
    },
    {
        name: 'Gemini',
        start: {
            month: 5,
            day: 21
        },
        end: {
            month: 6,
            day: 20
        },
        insight: 'Gemini: Share curiosities and listen with warmth.',
        habit: 'Send one kind message.',
        element: 'Air'
    },
    {
        name: 'Cancer',
        start: {
            month: 6,
            day: 21
        },
        end: {
            month: 7,
            day: 22
        },
        insight: 'Cancer: Prioritize emotional rest and soft boundaries.',
        habit: 'Journal one feeling for 5 mins.',
        element: 'Water'
    },
    {
        name: 'Leo',
        start: {
            month: 7,
            day: 23
        },
        end: {
            month: 8,
            day: 22
        },
        insight: 'Leo: Focus on creativity & self‑expression today.',
        habit: 'Share a small compliment.',
        element: 'Fire'
    },
    {
        name: 'Virgo',
        start: {
            month: 8,
            day: 23
        },
        end: {
            month: 9,
            day: 22
        },
        insight: 'Virgo: Small acts of care make relationships steady.',
        habit: 'Organize one tiny area.',
        element: 'Earth'
    },
    {
        name: 'Libra',
        start: {
            month: 9,
            day: 23
        },
        end: {
            month: 10,
            day: 22
        },
        insight: 'Libra: Notice balance and choose gentle fairness.',
        habit: 'Reflect on a recent conversation.',
        element: 'Air'
    },
    {
        name: 'Scorpio',
        start: {
            month: 10,
            day: 23
        },
        end: {
            month: 11,
            day: 21
        },
        insight: 'Scorpio: Depth is your ally; be honest but kind.',
        habit: 'Breathe slowly for 3 minutes.',
        element: 'Water'
    },
    {
        name: 'Sagittarius',
        start: {
            month: 11,
            day: 22
        },
        end: {
            month: 12,
            day: 21
        },
        insight: 'Sagittarius: Explore an idea with playful curiosity.',
        habit: 'Read one inspiring paragraph.',
        element: 'Fire'
    },
    {
        name: 'Capricorn',
        start: {
            month: 12,
            day: 22
        },
        end: {
            month: 1,
            day: 19
        },
        insight: 'Capricorn: Take steady steps toward a shared goal.',
        habit: 'Plan one achievable task.',
        element: 'Earth'
    },
    {
        name: 'Aquarius',
        start: {
            month: 1,
            day: 20
        },
        end: {
            month: 2,
            day: 18
        },
        insight: 'Aquarius: Offer space for individuality and new perspectives.',
        habit: 'Learn one new fact.',
        element: 'Air'
    },
    {
        name: 'Pisces',
        start: {
            month: 2,
            day: 19
        },
        end: {
            month: 3,
            day: 20
        },
        insight: 'Pisces: Compassion and imagination warm connections.',
        habit: 'Spend 5 minutes in quiet reflection.',
        element: 'Water'
    }
];
function getZodiacFromDate(d) {
    if (!d || isNaN(d.getTime())) return null;
    const month = d.getUTCMonth() + 1;
    const day = d.getUTCDate();
    for (const z of ZODIACS){
        const startM = z.start.month;
        const startD = z.start.day;
        const endM = z.end.month;
        const endD = z.end.day;
        if (startM < endM) {
            if (month === startM && day >= startD || month === endM && day <= endD || month > startM && month < endM) {
                return z;
            }
        } else {
            if (month === startM && day >= startD || month === endM && day <= endD || month > startM || month < endM) {
                return z;
            }
        }
    }
    return null;
}
function signToElement(sign) {
    if (!sign) return '';
    const s = sign.toLowerCase();
    if ([
        'aries',
        'leo',
        'sagittarius'
    ].includes(s)) return 'Fire';
    if ([
        'taurus',
        'virgo',
        'capricorn'
    ].includes(s)) return 'Earth';
    if ([
        'gemini',
        'libra',
        'aquarius'
    ].includes(s)) return 'Air';
    if ([
        'cancer',
        'scorpio',
        'pisces'
    ].includes(s)) return 'Water';
    return '';
}
const ELEMENT_MAP = ZODIACS.reduce((acc, z)=>(acc[z.name] = z.element, acc), {});
function getCompatibility(signA, signB) {
    const elemA = ELEMENT_MAP[signA];
    const elemB = ELEMENT_MAP[signB];
    if (!elemA || !elemB) return {
        error: 'Unknown sign(s)'
    };
    let summary = 'Neutral energy';
    let strengths = 'Shared respect and curiosity.';
    let conflicts = 'Different approaches may need translation.';
    if (elemA === elemB) {
        summary = 'Harmonious — similar rhythms.';
        strengths = 'Natural understanding, shared values.';
        conflicts = 'May need novelty to avoid stagnation.';
    } else if (elemA === 'Fire' && elemB === 'Air' || elemA === 'Air' && elemB === 'Fire') {
        summary = 'High energy & creative spark.';
        strengths = 'Exciting conversation, mutual inspiration.';
        conflicts = 'Can overlook emotional needs.';
    } else if (elemA === 'Earth' && elemB === 'Water' || elemA === 'Water' && elemB === 'Earth') {
        summary = 'Stable & nurturing.';
        strengths = 'Reliability and emotional depth.';
        conflicts = 'Risk of over-dependence or stuck patterns.';
    } else if (elemA === 'Fire' && elemB === 'Water' || elemA === 'Water' && elemB === 'Fire') {
        summary = 'Tension but potential growth.';
        strengths = 'Passion and emotional insight.';
        conflicts = 'Clashes of impulse vs. feeling.';
    } else if (elemA === 'Air' && elemB === 'Earth' || elemA === 'Earth' && elemB === 'Air') {
        summary = 'Practical vs. abstract dance.';
        strengths = 'Good balance of ideas & structure.';
        conflicts = 'Miscommunications about priorities.';
    } else {
        summary = 'Complementary energies.';
    }
    // small sanitization of strengths/conflicts to ensure strings
    return {
        summary,
        strengths,
        conflicts
    };
}
}),
"[project]/lib/astro.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Pure-JS astronomical helpers (approximate) for Moon longitude and Ascendant
// Good for consumer-facing Moon & Rising sign placement (no external libs)
__turbopack_context__.s([
    "ascendantDeg",
    ()=>ascendantDeg,
    "greenwichMeanSiderealTime",
    ()=>greenwichMeanSiderealTime,
    "julianCenturiesSinceJ2000",
    ()=>julianCenturiesSinceJ2000,
    "meanObliquityOfEcliptic",
    ()=>meanObliquityOfEcliptic,
    "moonEclipticLongitudeDeg",
    ()=>moonEclipticLongitudeDeg,
    "toJulianDay",
    ()=>toJulianDay,
    "zodiacFromDegrees",
    ()=>zodiacFromDegrees
]);
function toJulianDay(date) {
    // date is JS Date in UTC
    const year = date.getUTCFullYear();
    let month = date.getUTCMonth() + 1;
    const day = date.getUTCDate() + date.getUTCHours() / 24 + date.getUTCMinutes() / 1440 + date.getUTCSeconds() / 86400;
    let Y = year;
    let M = month;
    if (M <= 2) {
        Y = year - 1;
        M = month + 12;
    }
    const A = Math.floor(Y / 100);
    const B = 2 - A + Math.floor(A / 4);
    const JD = Math.floor(365.25 * (Y + 4716)) + Math.floor(30.6001 * (M + 1)) + day + B - 1524.5;
    return JD;
}
function normalizeAngle(deg) {
    let a = deg % 360;
    if (a < 0) a += 360;
    return a;
}
function deg2rad(d) {
    return d * Math.PI / 180;
}
function rad2deg(r) {
    return r * 180 / Math.PI;
}
function zodiacFromDegrees(deg) {
    const d = normalizeAngle(deg);
    const index = Math.floor(d / 30);
    const signs = [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces'
    ];
    const sign = signs[index];
    const degInSign = d - index * 30;
    return {
        sign,
        index,
        deg: degInSign
    };
}
function julianCenturiesSinceJ2000(JD) {
    return (JD - 2451545.0) / 36525.0;
}
function meanObliquityOfEcliptic(T) {
    // in degrees, approximate
    return 23.439291 - 0.0130042 * T - 1.64e-7 * T * T + 5.04e-7 * T * T * T;
}
function greenwichMeanSiderealTime(JD) {
    const T = (JD - 2451545.0) / 36525.0;
    let GMST = 280.46061837 + 360.98564736629 * (JD - 2451545) + 0.000387933 * T * T - T * T * T / 38710000;
    return normalizeAngle(GMST);
}
function moonEclipticLongitudeDeg(JD) {
    // Approximate Moon longitude using a few periodic terms (sufficient for sign-level accuracy)
    const T = (JD - 2451545.0) / 36525.0;
    // Mean elongation of the Moon
    const D = normalizeAngle(297.8501921 + 445267.1114034 * T - 0.0018819 * T * T + T * T * T / 545868 - T * T * T * T / 113065000);
    // Sun's mean anomaly
    const M = normalizeAngle(357.5291092 + 35999.0502909 * T - 0.0001536 * T * T + T * T * T / 24490000);
    // Moon's mean anomaly
    const Mp = normalizeAngle(134.9633964 + 477198.8675055 * T + 0.0087414 * T * T + T * T * T / 69699 - T * T * T * T / 14712000);
    // Moon's argument of latitude
    const F = normalizeAngle(93.2720950 + 483202.0175233 * T - 0.0036539 * T * T - T * T * T / 3526000 + T * T * T * T / 863310000);
    // Mean longitude of the Moon
    let Lp = normalizeAngle(218.3164477 + 481267.88123421 * T - 0.0015786 * T * T + T * T * T / 538841 - T * T * T * T / 65194000);
    // A handful of largest periodic terms (table of terms truncated) — coefficients in degrees
    const terms = [
        {
            D: 0,
            M: 0,
            Mp: 1,
            F: 0,
            coeff: -6.289
        },
        {
            D: 2,
            M: 0,
            Mp: -1,
            F: 0,
            coeff: 1.274
        },
        {
            D: 2,
            M: 0,
            Mp: 0,
            F: 0,
            coeff: 0.658
        },
        {
            D: 0,
            M: 0,
            Mp: 2,
            F: 0,
            coeff: 0.213
        },
        {
            D: 0,
            M: 1,
            Mp: 0,
            F: 0,
            coeff: -0.185
        },
        {
            D: 0,
            M: 0,
            Mp: 0,
            F: 2,
            coeff: -0.114
        },
        {
            D: 2,
            M: 0,
            Mp: -2,
            F: 0,
            coeff: 0.058
        },
        {
            D: 2,
            M: -1,
            Mp: -1,
            F: 0,
            coeff: 0.057
        },
        {
            D: 2,
            M: 0,
            Mp: 1,
            F: 0,
            coeff: 0.053
        }
    ];
    let sum = 0;
    for (const t of terms){
        const arg = deg2rad(t.D * D + t.M * M + t.Mp * Mp + t.F * F);
        sum += t.coeff * Math.sin(arg);
    }
    Lp += sum;
    Lp = normalizeAngle(Lp);
    return Lp;
}
function ascendantDeg(JD, latDeg, lonDeg) {
    // Compute local sidereal time in degrees
    const GMST = greenwichMeanSiderealTime(JD);
    const LST = normalizeAngle(GMST + lonDeg);
    const T = (JD - 2451545.0) / 36525.0;
    const eps = meanObliquityOfEcliptic(T);
    const lstRad = deg2rad(LST);
    const epsRad = deg2rad(eps);
    const latRad = deg2rad(latDeg);
    // Ascendant formula (approximate): compute ecliptic longitude of the Ascendant
    const sinL = Math.sin(lstRad);
    const cosL = Math.cos(lstRad);
    const tanLat = Math.tan(latRad);
    const x = Math.atan2(sinL * Math.cos(epsRad) - tanLat * Math.sin(epsRad), cosL);
    let asc = rad2deg(x);
    // convert from [-180,180] to 0-360
    asc = normalizeAngle(asc);
    return asc;
}
}),
"[project]/components/DetailedAstrologyGuide.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailedAstrologyGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zodiac.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZodiacAvatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/astro.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function DetailedAstrologyGuide({ name, dob, time, place, coords }) {
    const zodiac = dob ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getZodiacFromDate"])(new Date(dob)) : null;
    const heading = name ? `Hi ${name}` : 'Astrology Guide';
    // compute moon/rising when dob + time + coords provided
    let moonInfo = null;
    let risingInfo = null;
    let accuracyNote = '';
    try {
        if (dob && time && coords) {
            const tmatch = /^([0-2]\d):([0-5]\d)$/.exec(time);
            const cmatch = /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/.exec(coords);
            if (tmatch && cmatch) {
                const hour = Number(tmatch[1]);
                const minute = Number(tmatch[2]);
                const lat = Number(cmatch[1]);
                const lon = Number(cmatch[2]);
                // Parse DOB (YYYY-MM-DD) parts
                const dparts = dob.split('-');
                if (dparts.length === 3) {
                    const year = Number(dparts[0]);
                    const month = Number(dparts[1]);
                    const day = Number(dparts[2]);
                    // Approximate timezone offset from longitude (hours) — privacy-preserving local estimate
                    const tzOffsetHours = Math.round(lon / 15);
                    // Build UTC date from local birth time approx: UTC = local - tzOffset
                    const utcYear = year;
                    const utcMonth = month - 1;
                    const utcDay = day;
                    const utcHour = hour - tzOffsetHours;
                    const dateUTC = new Date(Date.UTC(utcYear, utcMonth, utcDay, utcHour, minute || 0, 0));
                    const JD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJulianDay"])(dateUTC);
                    const moonLon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moonEclipticLongitudeDeg"])(JD);
                    const ascDeg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ascendantDeg"])(JD, lat, lon);
                    moonInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodiacFromDegrees"])(moonLon);
                    risingInfo = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodiacFromDegrees"])(ascDeg);
                    accuracyNote = 'Rising is time-sensitive and this uses an approximate timezone from longitude; provide exact timezone/city for higher precision.';
                }
            }
        }
    } catch (e) {}
    function elementAccent(element) {
        if (!element) return 'bg-gray-100';
        switch(element){
            case 'Fire':
                return 'bg-gradient-to-br from-yellow-200 via-orange-100 to-red-50';
            case 'Earth':
                return 'bg-gradient-to-br from-green-50 via-emerald-50 to-lime-50';
            case 'Air':
                return 'bg-gradient-to-br from-sky-50 via-indigo-50 to-purple-50';
            case 'Water':
                return 'bg-gradient-to-br from-blue-50 via-cyan-50 to-sky-50';
            default:
                return 'bg-gray-100';
        }
    }
    function psychRegulationForElement(element) {
        if (!element) return 'Pause and name one feeling.';
        if (element === 'Fire') return 'Take 3 slow breaths before replying to high-energy moments.';
        if (element === 'Earth') return 'Ground with a short checklist to regain calm.';
        if (element === 'Air') return 'Write one sentence to organize the thought before speaking.';
        if (element === 'Water') return 'Soften by naming a need and one small request.';
        return 'Take a breath.';
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 rounded-lg shadow-md bg-white/90",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-start gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-semibold text-slate-800",
                                    children: heading
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 90,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-slate-600 mt-1",
                                    children: "A concise, privacy-first guide to your natal Sun (and optional Moon & Rising)."
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 91,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 89,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-sm text-slate-500",
                            children: dob ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Born: ",
                                    dob,
                                    time ? ` • ${time}` : ''
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 93,
                                columnNumber: 58
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Enter your DOB to personalize"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 93,
                                columnNumber: 111
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-5 grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: `col-span-1 p-4 rounded-lg border ${zodiac ? elementAccent(zodiac.element) : 'bg-white'}`,
                            children: zodiac ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-start gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-16 h-16 md:w-20 md:h-20 rounded-md overflow-hidden bg-white shadow-sm flex items-center justify-center",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                    sign: zodiac.name,
                                                    compact: true,
                                                    size: 56
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                    lineNumber: 102,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-lg md:text-xl font-semibold",
                                                        children: zodiac.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                        lineNumber: 105,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-slate-600 mt-1",
                                                        children: [
                                                            "Element: ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                children: zodiac.element
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                                lineNumber: 106,
                                                                columnNumber: 75
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                        lineNumber: 106,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                lineNumber: 104,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 100,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-1 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold",
                                                children: "Quick insight"
                                            }, void 0, false, {
                                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                lineNumber: 111,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-slate-700 mt-1",
                                                children: zodiac.insight
                                            }, void 0, false, {
                                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                lineNumber: 112,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 110,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-2 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold",
                                                children: "Mini-habit"
                                            }, void 0, false, {
                                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                lineNumber: 116,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-slate-700 mt-1",
                                                children: zodiac.habit
                                            }, void 0, false, {
                                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                lineNumber: 117,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 99,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "font-semibold",
                                        children: "Sun Sign"
                                    }, void 0, false, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 122,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-slate-700 mt-2",
                                        children: "Enter your date of birth to reveal your Sun sign and targeted tips."
                                    }, void 0, false, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 123,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 121,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 97,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-lg border bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "Moon & Rising"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        moonInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-sm text-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Moon:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                            lineNumber: 133,
                                                            columnNumber: 24
                                                        }, this),
                                                        " ",
                                                        moonInfo.sign,
                                                        " — (emotional needs)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                    lineNumber: 133,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Rising:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                            lineNumber: 134,
                                                            columnNumber: 41
                                                        }, this),
                                                        " ",
                                                        risingInfo.sign,
                                                        " — (first impressions & communication)"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                    lineNumber: 134,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "text-xs text-slate-500 mt-2",
                                                    children: accuracyNote
                                                }, void 0, false, {
                                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                    lineNumber: 135,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                            lineNumber: 132,
                                            columnNumber: 17
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-sm text-slate-700",
                                            children: "Provide birth time and coords (optional) to compute Moon & Rising. This improves interpersonal nuance."
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded-lg border bg-white",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "Practical Relationship Tips"
                                        }, void 0, false, {
                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 grid grid-cols-1 gap-2 text-sm text-slate-700",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Language:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                            lineNumber: 145,
                                                            columnNumber: 22
                                                        }, this),
                                                        " Use concrete requests (I need...) before assumptions."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Check-in:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                            lineNumber: 146,
                                                            columnNumber: 22
                                                        }, this),
                                                        " Try a 60-second emotional check-in with a partner this week."
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                            children: "Regulation:"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                            lineNumber: 147,
                                                            columnNumber: 22
                                                        }, this),
                                                        " ",
                                                        psychRegulationForElement(zodiac?.element)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                                    lineNumber: 147,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                    lineNumber: 96,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 grid grid-cols-1 md:grid-cols-3 gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-white border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "Strengths"
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-700 mt-2",
                                    children: "Curiosity, warmth, and small consistent actions often create stronger bonds."
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 156,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-white border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "Challenges"
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 159,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-700 mt-2",
                                    children: "Different rhythms can cause friction; naming needs early helps reduce reactivity."
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 160,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 158,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-3 rounded-lg bg-white border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "Growth"
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-sm text-slate-700 mt-2",
                                    children: "Try a 3-day micro-plan: short check-ins, shared small rituals, and a reflection prompt."
                                }, void 0, false, {
                                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                    lineNumber: 164,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 text-xs text-slate-500",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: "Compatibility here is element-based and intentionally gentle. Try the SoulMatch tool to compare with a partner."
                        }, void 0, false, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 169,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-1",
                            children: "Privacy: nothing leaves your device. Inputs are stored locally only if you choose to remember them."
                        }, void 0, false, {
                            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                            lineNumber: 170,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                    lineNumber: 168,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/DetailedAstrologyGuide.tsx",
            lineNumber: 87,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
        lineNumber: 86,
        columnNumber: 5
    }, this);
}
}),
"[project]/app/onboarding/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Onboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZodiacAvatar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zodiac.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DetailedAstrologyGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DetailedAstrologyGuide.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const PRESETS = [
    {
        label: 'Sample: Leo (Aug 15)',
        name: 'Alex',
        dob: '1990-08-15',
        time: '',
        place: ''
    },
    {
        label: 'Sample: Taurus (May 5)',
        name: 'Sam',
        dob: '1988-05-05',
        time: '',
        place: ''
    },
    {
        label: 'Sample: Pisces (Mar 3)',
        name: 'Taylor',
        dob: '1992-03-03',
        time: '',
        place: ''
    }
];
function Onboarding() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('Alex');
    const [dob, setDob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [place, setPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [showGuide, setShowGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [remember, setRemember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const zodiac = dob ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getZodiacFromDate"])(new Date(dob)) : null;
    // Load saved inputs from sessionStorage or localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            const s = sessionStorage.getItem('sc_onboarding');
            const p = localStorage.getItem('sc_onboarding_persist');
            if (s) {
                const obj = JSON.parse(s);
                setName(obj.name || '');
                setDob(obj.dob || '');
                setTime(obj.time || '');
                setPlace(obj.place || '');
            }
            if (p) {
                const obj = JSON.parse(p);
                setName(obj.name || '');
                setDob(obj.dob || '');
                setTime(obj.time || '');
                setPlace(obj.place || '');
                setRemember(true);
            }
        } catch (e) {}
    }, []);
    // Persist to sessionStorage whenever inputs change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        try {
            sessionStorage.setItem('sc_onboarding', JSON.stringify({
                name,
                dob,
                time,
                place
            }));
        } catch (e) {}
        if (remember) {
            try {
                localStorage.setItem('sc_onboarding_persist', JSON.stringify({
                    name,
                    dob,
                    time,
                    place
                }));
            } catch (e) {}
        }
    }, [
        name,
        dob,
        time,
        place,
        remember
    ]);
    function applyPreset(p) {
        setName(p.name);
        setDob(p.dob);
        setTime(p.time);
        setPlace(p.place);
    }
    function clearData() {
        setName('');
        setDob('');
        setTime('');
        setPlace('');
        sessionStorage.removeItem('sc_onboarding');
        localStorage.removeItem('sc_onboarding_persist');
        setRemember(false);
    }
    function handleSubmit(e) {
        e.preventDefault();
        const params = new URLSearchParams();
        if (name) params.set('name', name);
        if (dob) params.set('dob', dob);
        if (time) params.set('time', time);
        if (place) params.set('place', place);
        router.push(`/dashboard?${params.toString()}`);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl w-full card-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-[#3b0764]",
                children: "Welcome — This is your safe space"
            }, void 0, false, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "soft-microcopy",
                children: "This is your safe space — all insights are private. You can enter a name and DOB to get gentle, relationship-focused astrology guidance. Optional time/place can refine details but are not required."
            }, void 0, false, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "mt-4 space-y-4",
                "aria-label": "Onboarding form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Your name"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                value: name,
                                onChange: (e)=>setName(e.target.value),
                                className: "mt-1 w-full rounded-md p-2",
                                placeholder: "Alex",
                                "aria-label": "Your name"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 78,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-600 mt-1",
                                children: "This is used only to personalize your dashboard for this session."
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 76,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Date of Birth"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                required: true,
                                type: "date",
                                value: dob,
                                onChange: (e)=>setDob(e.target.value),
                                className: "mt-1 rounded-md p-2",
                                "aria-label": "Date of birth"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-600 mt-1",
                                children: "Format: YYYY-MM-DD (use the date picker). Example: 1990-08-15"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex gap-2",
                                children: PRESETS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>applyPreset(p),
                                        className: "text-xs px-2 py-1 rounded bg-white/90 text-[#3b0764]",
                                        children: p.label
                                    }, p.label, false, {
                                        fileName: "[project]/app/onboarding/page.tsx",
                                        lineNumber: 89,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 87,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Birth Time (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "time",
                                value: time,
                                onChange: (e)=>setTime(e.target.value),
                                className: "mt-1 rounded-md p-2",
                                "aria-label": "Birth time",
                                placeholder: "--:--"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-600 mt-1",
                                children: "If unknown, leave blank — insights will still work on sun sign."
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 94,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Birth Place (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                value: place,
                                onChange: (e)=>setPlace(e.target.value),
                                className: "mt-1 rounded-md p-2",
                                placeholder: "City, Country",
                                "aria-label": "Birth place"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 102,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-600 mt-1",
                                children: "City and country help with deeper charts, but are optional here."
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 100,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "large-cta",
                                children: "Continue to Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: zodiac ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                            sign: zodiac.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/onboarding/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 28
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-600",
                                            children: "Your sign preview will appear here"
                                        }, void 0, false, {
                                            fileName: "[project]/app/onboarding/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 66
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/onboarding/page.tsx",
                                        lineNumber: 109,
                                        columnNumber: 13
                                    }, this),
                                    zodiac ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold",
                                                children: zodiac.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/onboarding/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-700 mt-1",
                                                children: zodiac.insight
                                            }, void 0, false, {
                                                fileName: "[project]/app/onboarding/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-700 mt-1",
                                                children: [
                                                    "Mini habit: ",
                                                    zodiac.habit
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/onboarding/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/onboarding/page.tsx",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this) : null
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 106,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 75,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowGuide((g)=>!g),
                        className: "text-sm text-[#3b0764] underline",
                        children: [
                            showGuide ? 'Hide' : 'Show',
                            " Astrology Guide"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 122,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm ml-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: remember,
                                onChange: (e)=>setRemember(e.target.checked)
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 123,
                                columnNumber: 65
                            }, this),
                            " Remember on this device"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 123,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: clearData,
                        className: "text-sm text-red-600 underline ml-auto",
                        children: "Clear saved data"
                    }, void 0, false, {
                        fileName: "[project]/app/onboarding/page.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            showGuide ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 p-4 rounded bg-white/90",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DetailedAstrologyGuide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    name: name,
                    dob: dob,
                    time: time,
                    place: place
                }, void 0, false, {
                    fileName: "[project]/app/onboarding/page.tsx",
                    lineNumber: 129,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 128,
                columnNumber: 9
            }, this) : null
        ]
    }, void 0, true, {
        fileName: "[project]/app/onboarding/page.tsx",
        lineNumber: 71,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_b1980b2f._.js.map