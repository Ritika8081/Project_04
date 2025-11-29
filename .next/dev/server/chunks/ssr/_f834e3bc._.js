module.exports = [
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
"[project]/app/soulmatch/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SoulMatch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zodiac.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/astro.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZodiacAvatar.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const SIGNS = [
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
function parseDateInput(input) {
    if (!input) return null;
    input = input.trim();
    // Accept dd-mm-yyyy
    const dmy = /^(\d{2})-(\d{2})-(\d{4})$/.exec(input);
    if (dmy) {
        const day = Number(dmy[1]);
        const month = Number(dmy[2]);
        const year = Number(dmy[3]);
        const dt = new Date(Date.UTC(year, month - 1, day));
        if (!isNaN(dt.getTime())) return dt;
    }
    // Accept yyyy-mm-dd
    const ymd = /^(\d{4})-(\d{2})-(\d{2})$/.exec(input);
    if (ymd) {
        const year = Number(ymd[1]);
        const month = Number(ymd[2]);
        const day = Number(ymd[3]);
        const dt = new Date(Date.UTC(year, month - 1, day));
        if (!isNaN(dt.getTime())) return dt;
    }
    // fallback: try Date constructor
    const tryDt = new Date(input);
    if (!isNaN(tryDt.getTime())) return tryDt;
    return null;
}
function SoulMatch() {
    const [yourDobRaw, setYourDobRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [partnerDobRaw, setPartnerDobRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [partnerSign, setPartnerSign] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [timeRaw, setTimeRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [coordsRaw, setCoordsRaw] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [unlockDeep, setUnlockDeep] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [tone, setTone] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [focus, setFocus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [result, setResult] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const loadingRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [miniPlan, setMiniPlan] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shareSvg, setShareSvg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [shareImgUrl, setShareImgUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [sharing, setSharing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [copySuccess, setCopySuccess] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reflection, setReflection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [reflectionSubmitted, setReflectionSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [partnerPerspective, setPartnerPerspective] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const displayPrimary = result ? partnerPerspective ? result.partner : result.yours : null;
    const displayOther = result ? partnerPerspective ? result.yours : result.partner : null;
    // Try to resolve a place name to coordinates using OpenStreetMap Nominatim (client-side).
    // Returns { lat, lon } or null.
    async function resolveCoordsFromPlace(q) {
        if (!q) return null;
        // quick check if user already provided lat,lon
        const cm = /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/.exec(q);
        if (cm) return {
            lat: Number(cm[1]),
            lon: Number(cm[2])
        };
        try {
            const url = 'https://nominatim.openstreetmap.org/search?format=json&limit=1&q=' + encodeURIComponent(q);
            const res = await fetch(url, {
                headers: {
                    'Accept': 'application/json'
                }
            });
            const body = await res.json();
            if (Array.isArray(body) && body.length > 0) {
                const it = body[0];
                if (it && it.lat && it.lon) return {
                    lat: Number(it.lat),
                    lon: Number(it.lon)
                };
            }
        } catch (e) {
        // ignore network errors — fallback to null
        }
        return null;
    }
    function buildReport(yours, partner, compatibility, toneChoice, focusChoice, perspective = 'you') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mt-4 p-4 rounded bg-white/90 space-y-4",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: (()=>{
                        const score = computeCompatibilityScore(yours.name, partner.name, compatibility);
                        const primary = perspective === 'partner' ? partner : yours;
                        const other = perspective === 'partner' ? yours : partner;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-lg p-4 bg-gradient-to-tr from-white to-gray-50 border",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col md:flex-row items-start gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-none",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-28 h-28 md:w-36 md:h-36 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-400 to-purple-600 text-white text-2xl md:text-3xl font-bold shadow",
                                            children: [
                                                score,
                                                "%"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 92,
                                            columnNumber: 23
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/soulmatch/page.tsx",
                                        lineNumber: 91,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex-1",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-between",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                        className: "font-semibold text-lg",
                                                        children: "How You Two Feel Together"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 97,
                                                        columnNumber: 23
                                                    }, this),
                                                    perspective === 'partner' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "text-xs text-indigo-600",
                                                        children: "Viewing: Partner’s perspective"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 98,
                                                        columnNumber: 52
                                                    }, this) : null
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 96,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-sm text-gray-600 mt-1",
                                                children: scoreMessage(score)
                                            }, void 0, false, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded bg-white border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl",
                                                                        children: "✨"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 104,
                                                                        columnNumber: 80
                                                                    }, this),
                                                                    " When it’s good"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 104,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-2 list-disc list-inside text-sm space-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: toneChoice === 'new' ? 'You two are full of warm curiosity — everything feels possible and tender.' : toneChoice === 'confused' ? 'You catch small moments of connection; clarity is beginning to appear.' : toneChoice === 'fight' ? 'You love deeply — even when one of you acts tough, the care runs beneath the surface.' : toneChoice === 'grow' ? 'You are learning each other; steady practice is bringing hopeful change.' : 'You two love and care for each other — there is a steady, loyal warmth here.'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 106,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 105,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded bg-white border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold flex items-center gap-2",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "text-xl",
                                                                        children: "⚠️"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 111,
                                                                        columnNumber: 80
                                                                    }, this),
                                                                    " When it’s hard"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 111,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-2 list-disc list-inside text-sm space-y-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                    children: toneChoice === 'new' ? 'Excitement or nerves can make small missteps feel bigger than they are.' : toneChoice === 'confused' ? 'Mixed signals can create doubt — gentle clarifying questions help you reconnect.' : toneChoice === 'fight' ? 'One of you moves faster while the other needs reassurance — feelings can get louder than words.' : toneChoice === 'grow' ? 'Old patterns surface under stress; keep leaning into small check-ins and agreed practices.' : 'Sometimes you move at different speeds; naming needs helps you bridge the gap.'
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 113,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 112,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 110,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 102,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "mt-3 text-xs italic text-gray-600",
                                                children: "This isn’t incompatibility — it’s learning each other’s pace."
                                            }, void 0, false, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 118,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/soulmatch/page.tsx",
                                        lineNumber: 95,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/soulmatch/page.tsx",
                                lineNumber: 90,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 89,
                            columnNumber: 15
                        }, this);
                    })()
                }, void 0, false, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 83,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center my-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-px bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 text-xs text-gray-400 font-medium",
                                            children: "Strengths"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 130,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-px bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 131,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 128,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded bg-white/95 border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl",
                                                children: "❤️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 136,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: "Strengths"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 138,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-sm text-slate-700",
                                                        children: [
                                                            "Passion + emotional insight",
                                                            focusChoice === 'trust' ? ' — a reliable anchor when you show care.' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 139,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-sm text-slate-700",
                                                        children: [
                                                            "Steady loyalty and follow-through",
                                                            focusChoice === 'future' ? ' — a base for planning together.' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 140,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-sm text-slate-700",
                                                        children: [
                                                            "Shared sense of “we’re in this together”",
                                                            focusChoice === 'communication' ? ' — nurture this with curious questions.' : ''
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 141,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 137,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/soulmatch/page.tsx",
                                        lineNumber: 135,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 134,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center my-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-px bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 text-xs text-gray-400 font-medium",
                                            children: "Challenges"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 148,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-px bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 149,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 146,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded bg-white/95 border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl",
                                                children: "⚡"
                                            }, void 0, false, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: "Challenges"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                        className: "mt-2 list-disc ml-5 text-sm space-y-1 text-slate-700",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Fast reactions can clash with deep feelings"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 158,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Assuming instead of naming your needs"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 159,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: "Different processing speeds under stress"
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 160,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 157,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 155,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/soulmatch/page.tsx",
                                        lineNumber: 153,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 152,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center my-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-px bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 167,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-3 text-xs text-gray-400 font-medium",
                                            children: "Plan"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1 h-px bg-gray-200"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 169,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "p-4 rounded bg-white/95 border",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-start gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-2xl",
                                                children: "🌱"
                                            }, void 0, false, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 174,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "font-semibold",
                                                        children: "Growth — 4-week starter"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 176,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ol", {
                                                        className: "list-decimal ml-5 mt-2 text-sm text-slate-700 space-y-1",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Week 1"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 178,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " — Curiosity: short daily questions to open conversation."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 178,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Week 2"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 179,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " — Ritual: small shared routines to build reliability."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 179,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Week 3"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 180,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " — Pause & express: name needs before reacting."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 180,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                        children: "Week 4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 181,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    " — Gratitude: nightly appreciation to stabilize warmth."
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 181,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 177,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "mt-2 text-xs text-gray-600",
                                                        children: "Tip: pick one micro-habit from Week 1 and practice it daily."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 183,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 175,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/soulmatch/page.tsx",
                                        lineNumber: 173,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 172,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 127,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-4 rounded bg-white/95 border",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "font-semibold",
                                    children: "Emotional Regulation — Practical"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 191,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-3 flex flex-col gap-3",
                                    children: [
                                        (()=>{
                                            const yoursPsych = psychRegulationForElement(yours?.element);
                                            const partnerPsych = psychRegulationForElement(partner?.element);
                                            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded bg-white/50 border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    "You — ",
                                                                    yours?.name || 'You'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 199,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs italic mt-1 text-slate-600",
                                                                children: yoursPsych.why
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 200,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-2 list-disc ml-5 text-sm text-slate-700 space-y-1",
                                                                children: yoursPsych.practices.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: p
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 203,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 201,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "p-3 rounded bg-white/50 border",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-semibold",
                                                                children: [
                                                                    "Partner — ",
                                                                    partner?.name || 'Partner'
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 209,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-xs italic mt-1 text-slate-600",
                                                                children: partnerPsych.why
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 210,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                                className: "mt-2 list-disc ml-5 text-sm text-slate-700 space-y-1",
                                                                children: partnerPsych.practices.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                                        children: p
                                                                    }, i, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 213,
                                                                        columnNumber: 27
                                                                    }, this))
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                                lineNumber: 211,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 208,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true);
                                        })(),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-xs text-gray-600",
                                            children: "This blends emotional-intelligence research with sign-level tendencies — practical, evidence-informed ideas rather than predictions."
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 221,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 190,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 126,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold",
                            children: "💫 Micro-Reflection"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 227,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: "How this relationship often feels:"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 228,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "mt-2 list-disc ml-5",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "❤️ Warm & intense"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 230,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "🔥 Passionate & alive"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: "🌧 Stormy when misunderstood"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 232,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 229,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 italic",
                            children: "Two different languages — one real love."
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 234,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 226,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold",
                            children: "Want to improve communication this week?"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 238,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mt-1",
                            children: "Get a gentle 3-day mini plan tailored to your focus to turn small practice into real change."
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-col sm:flex-row gap-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>generate3DayMiniPlan(focusChoice, toneChoice),
                                    className: "px-3 py-2 rounded bg-pink-500 text-white text-sm w-full sm:w-auto",
                                    children: "Get 3-day mini plan"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setMiniPlan(null);
                                    },
                                    className: "px-3 py-2 rounded bg-gray-200 text-sm w-full sm:w-auto",
                                    children: "Clear"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 242,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 240,
                            columnNumber: 11
                        }, this),
                        miniPlan ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            id: "mini-plan-card",
                            className: "mt-3 p-3 rounded bg-white/95 text-sm space-y-2",
                            children: miniPlan.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: [
                                                "Day ",
                                                idx + 1,
                                                ":"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 248,
                                            columnNumber: 32
                                        }, this),
                                        " ",
                                        item
                                    ]
                                }, idx, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 248,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 237,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                            className: "font-semibold",
                            children: "🌙 Curious About a Deeper Layer?"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 255,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2",
                            children: "Unlock moon & rising signs (optional) to understand emotional needs & communication style more accurately."
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 256,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 254,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-2 font-medium",
                        children: "Love isn’t about perfect matching — it’s about learning each other. You two have real potential. Handle with care, not speed."
                    }, void 0, false, {
                        fileName: "[project]/app/soulmatch/page.tsx",
                        lineNumber: 260,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 259,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                    className: "mt-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-semibold",
                            children: "Before you leave… How did this feel?"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 263,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm mt-1 text-gray-600",
                            children: "Your quick answer helps us improve the experience."
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 264,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-3 flex flex-col sm:flex-row gap-2",
                            children: [
                                'Accurate',
                                'Made me think',
                                'I learned something new',
                                'Hmm not sure'
                            ].map((opt)=>{
                                const active = reflection === opt;
                                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setReflection(opt);
                                        setReflectionSubmitted(true);
                                        saveReflection(opt, {
                                            yours,
                                            partner,
                                            compatibility,
                                            tone: toneChoice,
                                            focus: focusChoice
                                        });
                                    },
                                    className: `px-3 py-2 rounded border text-sm ${active ? 'bg-pink-100 border-pink-300' : 'bg-white'}`,
                                    children: opt
                                }, opt, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 269,
                                    columnNumber: 17
                                }, this);
                            })
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        reflectionSubmitted ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-xs text-green-700",
                            children: "Thanks — your answer was saved for this session."
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 276,
                            columnNumber: 13
                        }, this) : null
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 262,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/soulmatch/page.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this);
    }
    function elementSpeak(el) {
        switch(el){
            case 'Fire':
                return 'initiative and warmth';
            case 'Earth':
                return 'stability and care';
            case 'Air':
                return 'ideas and curious conversation';
            case 'Water':
                return 'emotional depth and empathy';
            default:
                return 'a unique quality';
        }
    }
    function elementAccent(element) {
        if (!element) return 'bg-gradient-to-tr from-gray-200 to-gray-300 text-gray-800';
        switch(element.toLowerCase()){
            case 'fire':
                return 'bg-gradient-to-tr from-orange-300 to-pink-400 text-white';
            case 'water':
                return 'bg-gradient-to-tr from-blue-300 to-indigo-400 text-white';
            case 'air':
                return 'bg-gradient-to-tr from-sky-300 to-emerald-300 text-white';
            case 'earth':
                return 'bg-gradient-to-tr from-emerald-300 to-lime-300 text-white';
            default:
                return 'bg-gradient-to-tr from-gray-200 to-gray-300 text-gray-800';
        }
    }
    function computeCompatibilityScore(signA, signB, compatibility) {
        // Base score
        let score = 60;
        const same = signA === signB;
        if (same) score += 20;
        // Map zodiac sign -> element using shared helper
        const elemA = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signToElement"])(signA);
        const elemB = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["signToElement"])(signB);
        // boost/deduct based on wording in compatibility.summary
        const s = compatibility && compatibility.summary ? String(compatibility.summary).toLowerCase() : '';
        if (s.includes('harmonious') || s.includes('harmonic')) score += 10;
        if (s.includes('high energy') || s.includes('creative spark')) score += 5;
        if (s.includes('stable') || s.includes('nurturing')) score += 5;
        if (s.includes('tension') || s.includes('clashes') || s.includes('conflicts')) score -= 10;
        if (s.includes('miscommunications')) score -= 5;
        // element-based heuristics (use elements, not sign strings)
        if (elemA && elemB) {
            if (elemA === elemB && !same) score += 8; // same element tends to feel naturally compatible
            const fireAir = elemA === 'Fire' || elemA === 'Air' || elemB === 'Fire' || elemB === 'Air';
            if (fireAir && elemA !== elemB) score += 5;
        }
        // clamp
        if (score < 30) score = 30;
        if (score > 95) score = 95;
        return Math.round(score);
    }
    function scoreMessage(score) {
        if (score >= 85) return 'Radiant synergy — there’s a joyful spark and reliable warmth when you show up for each other.';
        if (score >= 70) return 'Strong potential — with patient communication this connection can deepen beautifully.';
        if (score >= 55) return 'Balanced — good chemistry, some work needed to bridge differences; small rituals help.';
        if (score >= 40) return 'Tender work required — there’s real feeling, but you’ll need steady practices to stay close.';
        return 'Fragile but real — approach gently, name needs often, and celebrate small wins.';
    }
    // Psychology + EI layer: element-aware regulation tips
    function psychRegulationForElement(element) {
        switch((element || '').toLowerCase()){
            case 'fire':
                return {
                    title: 'Move & Express',
                    why: 'Fire signs often regulate by releasing energy through movement and direct expression.',
                    practices: [
                        'Daily short bursts of movement (walk, dance, push-ups) to shift intensity.',
                        'Speak your feelings in short, concrete “I feel… because…” statements.'
                    ]
                };
            case 'water':
                return {
                    title: 'Validate & Name Emotions',
                    why: 'Water signs soothe through being seen and naming emotional states.',
                    practices: [
                        'Name the feeling: “I’m feeling X right now” and invite the partner to mirror it.',
                        'Use gentle validation language: “That makes sense — I get why you’d feel that.”'
                    ]
                };
            case 'air':
                return {
                    title: 'Reflect & Reframe',
                    why: 'Air signs regulate with language, labeling thoughts and creating mental distance.',
                    practices: [
                        'Try thought-labeling: “That thought is just one possible story.”',
                        'Use a short 3-minute discussion to clarify meanings and reduce misinterpretation.'
                    ]
                };
            case 'earth':
                return {
                    title: 'Ground & Routine',
                    why: 'Earth signs find safety in steady routines and predictable acts of care.',
                    practices: [
                        'Create a small reliable ritual (shared check-in, a daily message) to build trust.',
                        'Use grounding techniques: 5 senses check, steady breathing, and small tasks.'
                    ]
                };
            default:
                return {
                    title: 'Simple Regulation',
                    why: 'Different people find different paths — try naming needs, a short pause, or a small ritual.',
                    practices: [
                        'Pause for 3 deep breaths before responding.',
                        'Name one need and one small action that would help.'
                    ]
                };
        }
    }
    function generate3DayMiniPlan(focusChoice, toneChoice) {
        // Create gentle 3-day micro-tasks tailored to focus and tone
        const plan = [];
        if (focusChoice === 'communication') {
            plan.push('Day 1 — 10-minute curiosity check-in: each person shares one highlight and one small worry.');
            plan.push('Day 2 — Active listening practice: one speaks for 3 minutes while the other paraphrases back.');
            plan.push('Day 3 — Appreciation note: each shares one thing the other did that felt supportive this week.');
        } else if (focusChoice === 'trust') {
            plan.push('Day 1 — Small reliability act: pick one tiny promise and complete it.');
            plan.push('Day 2 — Share a low-stakes vulnerability and one concrete way the partner can help.');
            plan.push('Day 3 — A brief ritual: confirm one plan for the week and one accountability step.');
        } else if (focusChoice === 'future') {
            plan.push('Day 1 — List one shared value and one small step toward it.');
            plan.push('Day 2 — Mini planning session: allocate 15 minutes to brainstorm one joint goal.');
            plan.push('Day 3 — Commit to one tiny shared action and schedule it in calendar.');
        } else if (focusChoice === 'needs') {
            plan.push('Day 1 — Name one need each and a small way the partner can offer it.');
            plan.push('Day 2 — Practice asking for what you need in a specific, concrete way.');
            plan.push('Day 3 — Reflect together: what worked and what felt safe?');
        } else {
            plan.push('Day 1 — Quick curiosity check-in: share one thing that mattered today.');
            plan.push('Day 2 — Small appreciative action: say thank you and name why.');
            plan.push('Day 3 — Plan one tiny shared moment (10 minutes) to connect.');
        }
        // tone can slightly tweak wording (softly)
        if (toneChoice === 'fight') {
            for(let i = 0; i < plan.length; i++)plan[i] = plan[i].replace(/\b(you|each)\b/gi, 'you both');
        } else if (toneChoice === 'new') {
            plan[0] = 'Day 1 — A gentle curiosity check: ask one open question and listen.';
        }
        setMiniPlan(plan);
        // scroll to plan (small UX nicety)
        setTimeout(()=>{
            const el = document.getElementById('mini-plan-card');
            if (el) el.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }, 120);
    }
    function makeSimpleSignGlyph(sign) {
        // Use short label for signs; emoji fallback
        const glyphs = {
            Aries: '♈',
            Taurus: '♉',
            Gemini: '♊',
            Cancer: '♋',
            Leo: '♌',
            Virgo: '♍',
            Libra: '♎',
            Scorpio: '♏',
            Sagittarius: '♐',
            Capricorn: '♑',
            Aquarius: '♒',
            Pisces: '♓'
        };
        return glyphs[sign] || sign.slice(0, 2);
    }
    function buildShareSVG(data) {
        const width = 1200;
        const height = 630;
        const yours = data.yours || {
            name: '—'
        };
        const partner = data.partner || {
            name: '—'
        };
        const score = computeCompatibilityScore(yours.name, partner.name, data.compatibility || {});
        const phrase = scoreMessage(score);
        const bg = `linear-gradient(135deg,#fff7fb 0%,#fef6e6 100%)`;
        // simple SVG with zodiac glyphs, names, score and phrase
        const svg = `<?xml version="1.0" encoding="UTF-8"?>
  <svg xmlns='http://www.w3.org/2000/svg' width='${width}' height='${height}' viewBox='0 0 ${width} ${height}'>
    <defs>
      <style><![CDATA[
        .title{font:700 42px/1.1 Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; fill:#111827}
        .score{font:700 60px/1 Inter, system-ui; fill:#c026d3}
        .sub{font:400 20px/1 Inter, system-ui; fill:#374151}
        .small{font:400 16px/1 Inter, system-ui; fill:#6b7280}
      ]]></style>
    </defs>
    <rect width='100%' height='100%' rx='24' fill='#fff' />
    <g>
      <rect x='36' y='36' width='${width - 72}' height='${height - 72}' rx='18' fill='#fff' stroke='#f3e8ff' stroke-width='2'/>
      <text x='80' y='110' class='title'>SoulMatch</text>
      <text x='80' y='165' class='sub'>${escapeXml(yours.name)} × ${escapeXml(partner.name)}</text>

      <g transform='translate(80,200)'>
        <circle cx='60' cy='60' r='56' fill='#fff0f6' stroke='#fecaca' stroke-width='2'/>
        <text x='60' y='78' text-anchor='middle' font-size='42' fill='#b91c1c'>${escapeXml(makeSimpleSignGlyph(yours.name))}</text>
        <text x='60' y='120' text-anchor='middle' class='small'>${escapeXml(yours.name)}</text>

        <rect x='160' y='18' width='420' height='160' rx='12' fill='#faf5ff' stroke='#e9d5ff' />
        <text x='360' y='80' text-anchor='middle' class='score'>${score}%</text>
        <text x='360' y='110' text-anchor='middle' class='sub' fill='#4b5563'>Compatibility Energy</text>
      </g>

      <g transform='translate(640,200)'>
        <circle cx='60' cy='60' r='56' fill='#f0fdf4' stroke='#bbf7d0' stroke-width='2'/>
        <text x='60' y='78' text-anchor='middle' font-size='42' fill='#065f46'>${escapeXml(makeSimpleSignGlyph(partner.name))}</text>
        <text x='60' y='120' text-anchor='middle' class='small'>${escapeXml(partner.name)}</text>
      </g>

      <foreignObject x='80' y='380' width='1040' height='200'>
        <div xmlns='http://www.w3.org/1999/xhtml' style='font-family: Inter, system-ui; color:#374151; font-size:20px; line-height:1.3;'>
          <div style='font-weight:600; margin-bottom:8px;'>${escapeXml(phrase)}</div>
          <div style='color:#6b7280; font-size:16px;'>“${escapeXml(data.compatibility && data.compatibility.summary || 'Different rhythms, but a strong pull.')}”</div>
        </div>
      </foreignObject>
    </g>
  </svg>`;
        return svg;
    }
    function escapeXml(s) {
        return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
    }
    async function svgToPngBlob(svg, width = 1200, height = 630) {
        return await new Promise((resolve)=>{
            const img = new Image();
            const svg64 = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);
            img.onload = ()=>{
                try {
                    const c = document.createElement('canvas');
                    c.width = width;
                    c.height = height;
                    const ctx = c.getContext('2d');
                    if (!ctx) {
                        resolve(null);
                        return;
                    }
                    ctx.fillStyle = '#fff';
                    ctx.fillRect(0, 0, width, height);
                    ctx.drawImage(img, 0, 0, width, height);
                    c.toBlob((b)=>resolve(b), 'image/png');
                } catch (e) {
                    resolve(null);
                }
            };
            img.onerror = ()=>resolve(null);
            img.src = svg64;
        });
    }
    async function createShareCard(data) {
        setSharing(true);
        try {
            const svg = buildShareSVG(data);
            setShareSvg(svg);
            const blob = await svgToPngBlob(svg);
            if (blob) {
                const url = URL.createObjectURL(blob);
                if (shareImgUrl) URL.revokeObjectURL(shareImgUrl);
                setShareImgUrl(url);
            }
        } finally{
            setSharing(false);
        }
    }
    async function downloadShare() {
        if (!shareImgUrl) return;
        const a = document.createElement('a');
        a.href = shareImgUrl;
        a.download = 'soulmatch-card.png';
        document.body.appendChild(a);
        a.click();
        a.remove();
    }
    async function copyShareImage() {
        if (!shareImgUrl) return false;
        try {
            const r = await fetch(shareImgUrl);
            const b = await r.blob();
            // try Clipboard API
            // @ts-ignore
            if (navigator.clipboard && window.ClipboardItem) {
                // @ts-ignore
                await navigator.clipboard.write([
                    new ClipboardItem({
                        'image/png': b
                    })
                ]);
                return true;
            }
        } catch (e) {}
        return false;
    }
    // cleanup object URL when it changes/unmounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (shareImgUrl) URL.revokeObjectURL(shareImgUrl);
        };
    }, [
        shareImgUrl
    ]);
    function saveReflection(choice, snapshot) {
        try {
            const key = 'soulmatch_reflections';
            const now = new Date().toISOString();
            const entry = {
                choice,
                timestamp: now,
                snapshot
            };
            const raw = sessionStorage.getItem(key);
            const arr = raw ? JSON.parse(raw) : [];
            arr.push(entry);
            sessionStorage.setItem(key, JSON.stringify(arr));
        } catch (e) {
            // ignore storage errors
            console.warn('Failed to save reflection', e);
        }
    }
    function handleCheck(e) {
        e.preventDefault();
        setResult(null);
        // show soft reading animation before computing
        if (loadingRef.current) {
            window.clearTimeout(loadingRef.current);
            loadingRef.current = null;
        }
        const yourDt = parseDateInput(yourDobRaw);
        const partnerDt = parseDateInput(partnerDobRaw);
        const yours = yourDt ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getZodiacFromDate"])(yourDt) : null;
        let partner = null;
        if (partnerSign) {
            partner = {
                name: partnerSign,
                element: undefined,
                insight: ''
            };
        } else if (partnerDt) {
            partner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getZodiacFromDate"])(partnerDt);
        }
        if (!yours || !partner) {
            setResult({
                error: 'Please provide your DOB and either a partner DOB or pick their sign. Use dd-mm-yyyy or yyyy-mm-dd.'
            });
            return;
        }
        // Start loading animation and compute after 1.5s
        setLoading(true);
        loadingRef.current = window.setTimeout(()=>{
            (async ()=>{
                try {
                    const compatibility = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getCompatibility"])(yours.name, partner.name);
                    // compute moon/rising if unlocked and we have time + coords
                    let deep = null;
                    try {
                        if (unlockDeep && timeRaw && coordsRaw && yourDt) {
                            const tmatch = /^([0-2]\d):([0-5]\d)$/.exec(timeRaw);
                            let lat = null;
                            let lon = null;
                            // first try lat,lon inline
                            const cmatch = /(-?\d+(?:\.\d+)?),\s*(-?\d+(?:\.\d+)?)/.exec(coordsRaw);
                            if (cmatch) {
                                lat = Number(cmatch[1]);
                                lon = Number(cmatch[2]);
                            } else {
                                // attempt client-side geocoding of place name
                                const resolved = await resolveCoordsFromPlace(coordsRaw);
                                if (resolved) {
                                    lat = resolved.lat;
                                    lon = resolved.lon;
                                }
                            }
                            if (tmatch && lat !== null && lon !== null) {
                                const hour = Number(tmatch[1]);
                                const minute = Number(tmatch[2]);
                                // approximate timezone offset from longitude
                                const tzOffsetHours = Math.round(lon / 15);
                                // use yourDt which is a Date (UTC midnight for the day); build UTC date
                                const year = yourDt.getUTCFullYear();
                                const month = yourDt.getUTCMonth();
                                const day = yourDt.getUTCDate();
                                const utcDate = new Date(Date.UTC(year, month, day, hour - tzOffsetHours, minute || 0, 0));
                                const JD = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toJulianDay"])(utcDate);
                                const moonLon = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["moonEclipticLongitudeDeg"])(JD);
                                const asc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ascendantDeg"])(JD, lat, lon);
                                deep = {
                                    moon: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodiacFromDegrees"])(moonLon),
                                    asc: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$astro$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["zodiacFromDegrees"])(asc)
                                };
                            }
                        }
                    } catch (e) {}
                    setResult({
                        yours,
                        partner,
                        compatibility,
                        deep,
                        tone,
                        focus
                    });
                } finally{
                    setLoading(false);
                    loadingRef.current = null;
                }
            })();
        }, 1500);
    }
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        return ()=>{
            if (loadingRef.current) window.clearTimeout(loadingRef.current);
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full min-h-screen bg-gray-50 py-10 px-6",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "mx-auto w-full max-w-5xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl font-extrabold mb-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-700",
                            children: "SoulMatch"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 675,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "ml-2 text-base font-medium text-gray-700",
                            children: "— Understand Your Connection, Deeply"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 676,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 674,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "soft-microcopy text-gray-600",
                    children: "A gentle, colorful space to explore how you complement each other — not predictions, but clarity & growth."
                }, void 0, false, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 678,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-3 rounded-lg",
                    style: {
                        background: 'linear-gradient(90deg, rgba(252,231,243,0.6), rgba(237,233,255,0.6))',
                        boxShadow: '0 6px 18px rgba(15,23,42,0.04)'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-medium",
                            children: "What are you exploring today?"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 682,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTone('new'),
                                    className: `px-3 py-1 rounded ${tone === 'new' ? 'bg-gradient-to-tr from-pink-300 to-pink-500 text-white' : 'bg-white/90'}`,
                                    children: "💕 New connection"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 684,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTone('confused'),
                                    className: `px-3 py-1 rounded ${tone === 'confused' ? 'bg-gradient-to-tr from-pink-300 to-pink-500 text-white' : 'bg-white/90'}`,
                                    children: "🥺 We’re confused"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 685,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTone('fight'),
                                    className: `px-3 py-1 rounded ${tone === 'fight' ? 'bg-gradient-to-tr from-orange-300 to-pink-400 text-white' : 'bg-white/90'}`,
                                    children: "💔 After a fight"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 686,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setTone('grow'),
                                    className: `px-3 py-1 rounded ${tone === 'grow' ? 'bg-gradient-to-tr from-emerald-300 to-lime-400 text-white' : 'bg-white/90'}`,
                                    children: "🌱 We’re trying to grow"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 687,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 683,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-xs text-gray-600",
                            children: "Selecting one slightly changes the tone of the results, so you feel understood."
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 689,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 681,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 p-3 rounded bg-white/90",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "font-medium",
                            children: "What do you want to understand better?"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 694,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 flex gap-2 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFocus('communication'),
                                    className: `px-3 py-1 rounded ${focus === 'communication' ? 'bg-gradient-to-tr from-sky-200 to-pink-200 text-white' : 'bg-white/90'}`,
                                    children: "○ Communication"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 696,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFocus('trust'),
                                    className: `px-3 py-1 rounded ${focus === 'trust' ? 'bg-gradient-to-tr from-emerald-200 to-emerald-400 text-white' : 'bg-white/90'}`,
                                    children: "○ Trust & security"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 697,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFocus('future'),
                                    className: `px-3 py-1 rounded ${focus === 'future' ? 'bg-gradient-to-tr from-yellow-200 to-orange-300 text-white' : 'bg-white/90'}`,
                                    children: "○ Future direction"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 698,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: ()=>setFocus('needs'),
                                    className: `px-3 py-1 rounded ${focus === 'needs' ? 'bg-gradient-to-tr from-indigo-200 to-sky-300 text-white' : 'bg-white/90'}`,
                                    children: "○ Emotional needs"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 699,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 695,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2 text-xs text-gray-600",
                            children: "Selecting this slightly tailors the wording and the suggested practices so it feels more personal."
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 701,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 693,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    className: "mt-4 space-y-3",
                    onSubmit: handleCheck,
                    "aria-label": "SoulMatch form",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "yourDob",
                                    className: "block text-sm",
                                    children: "Your Birthday 🎂"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 706,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "yourDob",
                                    value: yourDobRaw,
                                    onChange: (e)=>setYourDobRaw(e.target.value),
                                    placeholder: "dd-mm-yyyy (e.g. 15-08-1990)",
                                    className: "mt-1 rounded-md p-2 w-full",
                                    pattern: "\\d{2}-\\d{2}-\\d{4}",
                                    inputMode: "numeric",
                                    "aria-describedby": "yourDobHelp"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 707,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "yourDobHelp",
                                    className: "text-xs text-gray-600 mt-1",
                                    children: [
                                        "So we understand your natural energy. Format: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "dd-mm-yyyy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 708,
                                            columnNumber: 118
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 708,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 705,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "partnerDob",
                                    className: "block text-sm",
                                    children: "Their Birthday 💕"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 712,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "partnerDob",
                                    value: partnerDobRaw,
                                    onChange: (e)=>setPartnerDobRaw(e.target.value),
                                    placeholder: "dd-mm-yyyy (e.g. 05-05-1988)",
                                    className: "mt-1 rounded-md p-2 w-full",
                                    pattern: "\\d{2}-\\d{2}-\\d{4}",
                                    inputMode: "numeric",
                                    "aria-describedby": "partnerDobHelp"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 713,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "partnerDobHelp",
                                    className: "text-xs text-gray-600 mt-1",
                                    children: "To see how your energies interact. You can also pick their sun sign."
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 714,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 711,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm",
                                    children: "or choose their sun-sign"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 718,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                    value: partnerSign,
                                    onChange: (e)=>setPartnerSign(e.target.value),
                                    className: "mt-1 rounded-md p-2 w-full",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                            value: "",
                                            children: "-- pick --"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 720,
                                            columnNumber: 13
                                        }, this),
                                        SIGNS.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: s,
                                                children: s
                                            }, s, false, {
                                                fileName: "[project]/app/soulmatch/page.tsx",
                                                lineNumber: 722,
                                                columnNumber: 15
                                            }, this))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 719,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 717,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "birthTime",
                                    className: "block text-sm",
                                    children: "Birth Time (optional)"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 728,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "birthTime",
                                    value: timeRaw,
                                    onChange: (e)=>setTimeRaw(e.target.value),
                                    placeholder: "HH:MM (24h) e.g. 07:30",
                                    className: "mt-1 rounded-md p-2 w-full",
                                    pattern: "([01]\\d|2[0-3]):[0-5]\\d",
                                    inputMode: "numeric",
                                    "aria-describedby": "birthTimeHelp"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 729,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "birthTimeHelp",
                                    className: "text-xs text-gray-600 mt-1",
                                    children: [
                                        "Provide local birth time to unlock Moon & Rising when used with coords. Format: ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("code", {
                                            children: "HH:MM"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 730,
                                            columnNumber: 154
                                        }, this),
                                        "."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 730,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 727,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    htmlFor: "coords",
                                    className: "block text-sm",
                                    children: "Birth place (optional)"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 734,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    id: "coords",
                                    value: coordsRaw,
                                    onChange: (e)=>setCoordsRaw(e.target.value),
                                    placeholder: "City, region or place name (e.g. New Delhi)",
                                    className: "mt-1 rounded-md p-2 w-full",
                                    "aria-describedby": "coordsHelp"
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 735,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    id: "coordsHelp",
                                    className: "text-xs text-gray-600 mt-1",
                                    children: "Type a location name — we'll resolve coordinates & timezone for you (optional). Geocoding happens only when you ask to unlock deeper readings."
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 736,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 733,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: unlockDeep,
                                            onChange: (e)=>setUnlockDeep(e.target.checked)
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 740,
                                            columnNumber: 62
                                        }, this),
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "Unlock moon & rising (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 740,
                                            columnNumber: 155
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 740,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-xs text-gray-600",
                                    children: "Rising is time-sensitive. If you enable this, we estimate timezone from longitude (approx)."
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 741,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 739,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col sm:flex-row items-stretch sm:items-center gap-3",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "large-cta w-full sm:w-auto shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition",
                                "aria-label": "Show our connection",
                                children: "🌟 Show Our Connection"
                            }, void 0, false, {
                                fileName: "[project]/app/soulmatch/page.tsx",
                                lineNumber: 745,
                                columnNumber: 11
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 744,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 704,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-3 text-xs text-gray-600",
                    children: "No sign-in needed, nothing saved — just honest insight for your heart."
                }, void 0, false, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 749,
                    columnNumber: 7
                }, this),
                loading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-6 p-6 rounded bg-white/90 text-center animate-pulse",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "text-lg font-medium",
                            children: "Aligning stars…"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 753,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-2",
                            children: "Listening to your energies… ✨"
                        }, void 0, false, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 754,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 752,
                    columnNumber: 9
                }, this),
                result && (result.error ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mt-4 p-4 rounded bg-white/90",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-600",
                        children: result.error
                    }, void 0, false, {
                        fileName: "[project]/app/soulmatch/page.tsx",
                        lineNumber: 760,
                        columnNumber: 57
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 760,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 p-4 rounded-lg bg-white/95 shadow-md flex items-center justify-between gap-4",
                            style: {
                                border: '1px solid rgba(203,213,225,0.6)'
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "text-sm text-gray-500",
                                            children: "Compatibility Energy"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 766,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-tr from-pink-400 to-purple-600 text-white text-2xl font-bold",
                                                    children: [
                                                        computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility),
                                                        "%"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 768,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-lg font-semibold",
                                                            children: scoreMessage(computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 770,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs text-gray-600 mt-1",
                                                            children: "A soft, useful guide — not a prediction."
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 771,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 769,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 767,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 text-xs text-gray-500 italic",
                                            children: "Compatibility energy is a reflective tool — not a prediction or decision-making model."
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 774,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 765,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-2 items-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-2 py-1 bg-white rounded border text-xs",
                                            children: [
                                                "Tone: ",
                                                result.tone || tone || '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 777,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "px-2 py-1 bg-white rounded border text-xs",
                                            children: [
                                                "Focus: ",
                                                result.focus || focus || '—'
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 778,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setPartnerPerspective((p)=>!p),
                                            className: "ml-2 px-2 py-1 rounded bg-white border text-xs",
                                            children: partnerPerspective ? 'Viewing: Partner' : 'View Partner’s Perspective'
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 779,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 776,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 764,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 grid grid-cols-1 md:grid-cols-3 gap-4",
                            "aria-live": "polite",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 p-4 rounded bg-white/90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold mb-3",
                                            children: "You"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 787,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-start gap-4",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-24 h-24 rounded-md overflow-hidden flex items-center justify-center ${elementAccent(result.yours?.element)}`,
                                                    children: result.yours ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        sign: result.yours.name,
                                                        compact: true,
                                                        size: 84
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 790,
                                                        columnNumber: 37
                                                    }, this) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 789,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-lg font-semibold",
                                                                    children: result.yours.name
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 795,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs px-2 py-0.5 rounded-full bg-gray-100 text-gray-800",
                                                                    children: result.yours.element
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 796,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 794,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 text-sm text-slate-700",
                                                            children: result.yours.insight
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 799,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs font-semibold text-slate-600",
                                                                    children: "Mini habit"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 802,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-sm text-slate-700 mt-1",
                                                                    children: result.yours.habit
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 803,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 801,
                                                            columnNumber: 21
                                                        }, this),
                                                        result.deep ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 text-xs text-slate-600",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "Moon:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                                            lineNumber: 808,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        " ",
                                                                        result.deep.moon?.sign,
                                                                        " ",
                                                                        result.deep.moon ? `(${Math.round(result.deep.moon.deg)}°)` : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 808,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                                                            children: "Rising:"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                                            lineNumber: 809,
                                                                            columnNumber: 30
                                                                        }, this),
                                                                        " ",
                                                                        result.deep.asc?.sign,
                                                                        " ",
                                                                        result.deep.asc ? `(${Math.round(result.deep.asc.deg)}°)` : ''
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 809,
                                                                    columnNumber: 25
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 807,
                                                            columnNumber: 23
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 793,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 788,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 786,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 p-4 rounded bg-white/90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "Partner"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 817,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex items-center gap-3",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: `w-12 h-12 rounded-full flex items-center justify-center ${elementAccent(result.partner?.element)}`,
                                                    children: result.partner && result.partner.name ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                                        sign: result.partner.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                        lineNumber: 819,
                                                        columnNumber: 177
                                                    }, this) : null
                                                }, void 0, false, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 819,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "font-semibold",
                                                            children: result.partner.name
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 821,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs mt-1",
                                                            children: [
                                                                "Element: ",
                                                                result.partner.element || '—'
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 822,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-xs mt-1",
                                                            children: result.partner.insight || ''
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 823,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 820,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 818,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 816,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 p-4 rounded bg-white/90",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "font-semibold",
                                            children: "Energy Dynamic"
                                        }, void 0, false, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 829,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                                    className: "italic text-sm",
                                                    children: [
                                                        "“",
                                                        result.compatibility.summary || 'Different rhythms, but a strong pull.',
                                                        "”"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 831,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 font-semibold",
                                                    children: [
                                                        "Compatibility Energy: ",
                                                        computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility),
                                                        "% — ",
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "font-normal text-sm",
                                                            children: scoreMessage(computeCompatibilityScore(result.yours.name, result.partner.name, result.compatibility))
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 832,
                                                            columnNumber: 170
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 832,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold mt-3",
                                                    children: "Quick take"
                                                }, void 0, false, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 833,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm mt-1",
                                                    children: result.compatibility.strengths
                                                }, void 0, false, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 834,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 flex flex-col gap-2",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    disabled: sharing,
                                                                    onClick: ()=>createShareCard(result),
                                                                    className: "px-3 py-2 rounded bg-gradient-to-tr from-pink-500 to-purple-600 text-white text-sm shadow w-full sm:w-auto",
                                                                    children: "Create share card 💌"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 837,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: downloadShare,
                                                                    disabled: !shareImgUrl,
                                                                    className: "px-3 py-2 rounded bg-white border text-sm w-full sm:w-auto",
                                                                    children: "Download PNG"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 838,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: async ()=>{
                                                                        const ok = await copyShareImage();
                                                                        setCopySuccess(ok ? 'Copied image to clipboard' : 'Copy failed in this browser');
                                                                        setTimeout(()=>setCopySuccess(null), 2500);
                                                                    },
                                                                    disabled: !shareImgUrl,
                                                                    className: "px-3 py-2 rounded bg-white border text-sm w-full sm:w-auto",
                                                                    children: "Copy image"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 839,
                                                                    columnNumber: 25
                                                                }, this),
                                                                copySuccess ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-green-600",
                                                                    children: copySuccess
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 840,
                                                                    columnNumber: 40
                                                                }, this) : null
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 836,
                                                            columnNumber: 23
                                                        }, this),
                                                        sharing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "text-sm text-gray-500",
                                                            children: "Creating your share card…"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 842,
                                                            columnNumber: 34
                                                        }, this) : null,
                                                        shareImgUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "text-xs text-gray-600 mb-1",
                                                                    children: "Preview"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 845,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "w-full max-w-lg rounded overflow-hidden shadow-lg",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                        src: shareImgUrl,
                                                                        alt: "Share preview",
                                                                        className: "w-full block"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/soulmatch/page.tsx",
                                                                        lineNumber: 847,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                                    lineNumber: 846,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/app/soulmatch/page.tsx",
                                                            lineNumber: 844,
                                                            columnNumber: 25
                                                        }, this) : null
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/app/soulmatch/page.tsx",
                                                    lineNumber: 835,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/soulmatch/page.tsx",
                                            lineNumber: 830,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 828,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "col-span-1 md:col-span-3",
                                    children: buildReport(result.yours, result.partner, result.compatibility, result.tone || tone, result.focus || focus, partnerPerspective ? 'partner' : 'you')
                                }, void 0, false, {
                                    fileName: "[project]/app/soulmatch/page.tsx",
                                    lineNumber: 855,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/soulmatch/page.tsx",
                            lineNumber: 785,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/soulmatch/page.tsx",
                    lineNumber: 762,
                    columnNumber: 11
                }, this))
            ]
        }, void 0, true, {
            fileName: "[project]/app/soulmatch/page.tsx",
            lineNumber: 673,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/soulmatch/page.tsx",
        lineNumber: 672,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=_f834e3bc._.js.map