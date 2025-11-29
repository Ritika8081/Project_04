export type Zodiac = {
  name: string
  start: { month: number; day: number }
  end: { month: number; day: number }
  insight: string
  habit: string
  element: 'Fire'|'Earth'|'Air'|'Water'
}

const ZODIACS: Zodiac[] = [
  { name: 'Aries', start: {month:3,day:21}, end:{month:4,day:19}, insight: 'Aries: Embrace bold choices and gentle action today.', habit: 'Do a 3-minute movement to energize yourself.', element: 'Fire' },
  { name: 'Taurus', start: {month:4,day:20}, end:{month:5,day:20}, insight: 'Taurus: Ground in comfort and reliable rhythms.', habit: 'Tend to one small comfort (tea, blanket).', element: 'Earth' },
  { name: 'Gemini', start: {month:5,day:21}, end:{month:6,day:20}, insight: 'Gemini: Share curiosities and listen with warmth.', habit: 'Send one kind message.', element: 'Air' },
  { name: 'Cancer', start: {month:6,day:21}, end:{month:7,day:22}, insight: 'Cancer: Prioritize emotional rest and soft boundaries.', habit: 'Journal one feeling for 5 mins.', element: 'Water' },
  { name: 'Leo', start: {month:7,day:23}, end:{month:8,day:22}, insight: 'Leo: Focus on creativity & self‑expression today.', habit: 'Share a small compliment.', element: 'Fire' },
  { name: 'Virgo', start: {month:8,day:23}, end:{month:9,day:22}, insight: 'Virgo: Small acts of care make relationships steady.', habit: 'Organize one tiny area.', element: 'Earth' },
  { name: 'Libra', start: {month:9,day:23}, end:{month:10,day:22}, insight: 'Libra: Notice balance and choose gentle fairness.', habit: 'Reflect on a recent conversation.', element: 'Air' },
  { name: 'Scorpio', start: {month:10,day:23}, end:{month:11,day:21}, insight: 'Scorpio: Depth is your ally; be honest but kind.', habit: 'Breathe slowly for 3 minutes.', element: 'Water' },
  { name: 'Sagittarius', start: {month:11,day:22}, end:{month:12,day:21}, insight: 'Sagittarius: Explore an idea with playful curiosity.', habit: 'Read one inspiring paragraph.', element: 'Fire' },
  { name: 'Capricorn', start: {month:12,day:22}, end:{month:1,day:19}, insight: 'Capricorn: Take steady steps toward a shared goal.', habit: 'Plan one achievable task.', element: 'Earth' },
  { name: 'Aquarius', start: {month:1,day:20}, end:{month:2,day:18}, insight: 'Aquarius: Offer space for individuality and new perspectives.', habit: 'Learn one new fact.', element: 'Air' },
  { name: 'Pisces', start: {month:2,day:19}, end:{month:3,day:20}, insight: 'Pisces: Compassion and imagination warm connections.', habit: 'Spend 5 minutes in quiet reflection.', element: 'Water' },
]

export function getZodiacFromDate(d: Date){
  if (!d || isNaN(d.getTime())) return null
  const month = d.getUTCMonth() + 1
  const day = d.getUTCDate()

  for(const z of ZODIACS){
    const startM = z.start.month
    const startD = z.start.day
    const endM = z.end.month
    const endD = z.end.day

    if(startM < endM){
      if((month === startM && day >= startD) || (month === endM && day <= endD) || (month > startM && month < endM)){
        return z
      }
    } else { // wraps year end (Capricorn)
      if((month === startM && day >= startD) || (month === endM && day <= endD) || (month > startM || month < endM)){
        return z
      }
    }
  }
  return null
}

export function signToElement(sign: string){
  if(!sign) return ''
  const s = sign.toLowerCase()
  if(['aries','leo','sagittarius'].includes(s)) return 'Fire'
  if(['taurus','virgo','capricorn'].includes(s)) return 'Earth'
  if(['gemini','libra','aquarius'].includes(s)) return 'Air'
  if(['cancer','scorpio','pisces'].includes(s)) return 'Water'
  return ''
}

const ELEMENT_MAP: Record<string, 'Fire'|'Earth'|'Air'|'Water'> = ZODIACS.reduce((acc, z) => (acc[z.name] = z.element, acc), {} as any)

export function getCompatibility(signA: string, signB: string){
  const elemA = ELEMENT_MAP[signA]
  const elemB = ELEMENT_MAP[signB]
  if(!elemA || !elemB) return { error: 'Unknown sign(s)' }

  let summary = 'Neutral energy'
  let strengths = 'Shared respect and curiosity.'
  let conflicts = 'Different approaches may need translation.'

  if(elemA === elemB){
    summary = 'Harmonious — similar rhythms.'
    strengths = 'Natural understanding, shared values.'
    conflicts = 'May need novelty to avoid stagnation.'
  } else if((elemA === 'Fire' && elemB === 'Air') || (elemA === 'Air' && elemB === 'Fire')){
    summary = 'High energy & creative spark.'
    strengths = 'Exciting conversation, mutual inspiration.'
    conflicts = 'Can overlook emotional needs.'
  } else if((elemA === 'Earth' && elemB === 'Water') || (elemA === 'Water' && elemB === 'Earth')){
    summary = 'Stable & nurturing.'
    strengths = 'Reliability and emotional depth.'
    conflicts = 'Risk of over-dependence or stuck patterns.'
  } else if((elemA === 'Fire' && elemB === 'Water') || (elemA === 'Water' && elemB === 'Fire')){
    summary = 'Tension but potential growth.'
    strengths = 'Passion and emotional insight.'
    conflicts = 'Clashes of impulse vs. feeling.'
  } else if((elemA === 'Air' && elemB === 'Earth') || (elemA === 'Earth' && elemB === 'Air')){
    summary = 'Practical vs. abstract dance.'
    strengths = 'Good balance of ideas & structure.'
    conflicts = 'Miscommunications about priorities.'
  } else {
    summary = 'Complementary energies.'
  }

  // small sanitization of strengths/conflicts to ensure strings
  return { summary, strengths, conflicts }
}
