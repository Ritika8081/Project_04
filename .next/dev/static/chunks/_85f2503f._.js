(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/ZodiacAvatar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ZodiacAvatar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function ZodiacAvatar({ sign }) {
    const src = `/constellation-${sign.toLowerCase()}.svg`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex items-center gap-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: src,
                alt: `${sign} constellation`,
                width: 72,
                height: 72,
                className: "rounded-md"
            }, void 0, false, {
                fileName: "[project]/components/ZodiacAvatar.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-sm font-semibold",
                    children: sign
                }, void 0, false, {
                    fileName: "[project]/components/ZodiacAvatar.tsx",
                    lineNumber: 9,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/ZodiacAvatar.tsx",
                lineNumber: 8,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/ZodiacAvatar.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = ZodiacAvatar;
var _c;
__turbopack_context__.k.register(_c, "ZodiacAvatar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/zodiac.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getCompatibility",
    ()=>getCompatibility,
    "getZodiacFromDate",
    ()=>getZodiacFromDate
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
const ELEMENT_MAP = ZODIACS.reduce(_c = (acc, z)=>(acc[z.name] = z.element, acc), {});
_c1 = ELEMENT_MAP;
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
var _c, _c1;
__turbopack_context__.k.register(_c, "ELEMENT_MAP$ZODIACS.reduce");
__turbopack_context__.k.register(_c1, "ELEMENT_MAP");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/DetailedAstrologyGuide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DetailedAstrologyGuide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zodiac.ts [app-client] (ecmascript)");
"use client";
;
;
function DetailedAstrologyGuide({ name, dob, time, place }) {
    const zodiac = dob ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getZodiacFromDate"])(new Date(dob)) : null;
    const heading = name ? `Hi ${name}.` : 'Astrology Guide — Personalized';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "text-sm space-y-3",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                className: "font-semibold",
                children: heading
            }, void 0, false, {
                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            zodiac ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Your Sun sign:"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 23,
                                columnNumber: 14
                            }, this),
                            " ",
                            zodiac.name,
                            " — ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                children: zodiac.insight
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 23,
                                columnNumber: 62
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 23,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Mini habit suggestion:"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 24,
                                columnNumber: 14
                            }, this),
                            " ",
                            zodiac.habit
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 24,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Element:"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 25,
                                columnNumber: 14
                            }, this),
                            " ",
                            zodiac.element,
                            ". Elements give a simple lens on how you relate to others."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 25,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            "If you provided a birth ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "time"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 27,
                                columnNumber: 38
                            }, this),
                            " or ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "place"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 27,
                                columnNumber: 63
                            }, this),
                            ", insights can be slightly more tailored (emotional rhythms and daily timing). You can add those now or continue with Sun-sign guidance."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pt-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "font-semibold",
                                children: [
                                    "Practical tips for ",
                                    zodiac.name,
                                    ":"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 30,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "list-disc ml-5 text-sm mt-1",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Notice one moment today where you felt seen — jot it down."
                                    }, void 0, false, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 32,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "Try the mini habit above and observe how small consistency changes your conversations."
                                    }, void 0, false, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 33,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: "When in conflict, name one need before reacting (e.g., 'I need clarity', 'I need reassurance')."
                                    }, void 0, false, {
                                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                        lineNumber: 34,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 31,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 29,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Sun Sign"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 40,
                                columnNumber: 14
                            }, this),
                            ": We determine this from your date of birth (month/day). Enter your DOB to see personalized guidance."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Moon & Rising"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 41,
                                columnNumber: 14
                            }, this),
                            ": Birth time/place allow more refined readings — optional for this app."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 41,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                children: "Elements"
                            }, void 0, false, {
                                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                                lineNumber: 42,
                                columnNumber: 14
                            }, this),
                            ": Fire, Earth, Air, Water — a simple way to think about compatibility and styles of relating."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                        lineNumber: 42,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-600",
                children: "Compatibility: this app uses a gentle, element-based approach. If you want, try the SoulMatch tool to compare with a partner."
            }, void 0, false, {
                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-600",
                children: "Privacy: nothing leaves your device. Inputs are stored locally only if you choose to remember them."
            }, void 0, false, {
                fileName: "[project]/components/DetailedAstrologyGuide.tsx",
                lineNumber: 47,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/DetailedAstrologyGuide.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
_c = DetailedAstrologyGuide;
var _c;
__turbopack_context__.k.register(_c, "DetailedAstrologyGuide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/onboarding/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Onboarding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ZodiacAvatar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/zodiac.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DetailedAstrologyGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/DetailedAstrologyGuide.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
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
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('Alex');
    const [dob, setDob] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [time, setTime] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [place, setPlace] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showGuide, setShowGuide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [remember, setRemember] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const zodiac = dob ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$zodiac$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getZodiacFromDate"])(new Date(dob)) : null;
    // Load saved inputs from sessionStorage or localStorage on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Onboarding.useEffect": ()=>{
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
        }
    }["Onboarding.useEffect"], []);
    // Persist to sessionStorage whenever inputs change
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Onboarding.useEffect": ()=>{
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
        }
    }["Onboarding.useEffect"], [
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-2xl w-full card-fade",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-2xl font-semibold text-[#3b0764]",
                children: "Welcome — This is your safe space"
            }, void 0, false, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 72,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "soft-microcopy",
                children: "This is your safe space — all insights are private. You can enter a name and DOB to get gentle, relationship-focused astrology guidance. Optional time/place can refine details but are not required."
            }, void 0, false, {
                fileName: "[project]/app/onboarding/page.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                onSubmit: handleSubmit,
                className: "mt-4 space-y-4",
                "aria-label": "Onboarding form",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Your name"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 77,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Date of Birth"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "text-xs text-gray-600 mt-1",
                                children: "Format: YYYY-MM-DD (use the date picker). Example: 1990-08-15"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex gap-2",
                                children: PRESETS.map((p)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Birth Time (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 95,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "block text-sm font-medium",
                                children: "Birth Place (optional)"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "submit",
                                className: "large-cta",
                                children: "Continue to Dashboard"
                            }, void 0, false, {
                                fileName: "[project]/app/onboarding/page.tsx",
                                lineNumber: 107,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "ml-auto flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: zodiac ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ZodiacAvatar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            sign: zodiac.name
                                        }, void 0, false, {
                                            fileName: "[project]/app/onboarding/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 28
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    zodiac ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-sm text-left",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "font-semibold",
                                                children: zodiac.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/onboarding/page.tsx",
                                                lineNumber: 112,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-xs text-gray-700 mt-1",
                                                children: zodiac.insight
                                            }, void 0, false, {
                                                fileName: "[project]/app/onboarding/page.tsx",
                                                lineNumber: 113,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "text-sm ml-4 flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
            showGuide ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-3 p-4 rounded bg-white/90",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$DetailedAstrologyGuide$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
_s(Onboarding, "lJ9Zu2OuzivtImx1SNvQlSwpfbw=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Onboarding;
var _c;
__turbopack_context__.k.register(_c, "Onboarding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_85f2503f._.js.map