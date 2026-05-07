import type {
  ExperimentCard,
  ExperimentTrendPoint,
  MetricCard,
  QueueItem,
  SegmentLiftPoint,
  SpotlightCard
} from './types';

export const metrics: MetricCard[] = [
  { label: 'Active tests', value: '14', delta: '4 nearing ship decision', tone: 'watch' },
  { label: 'Winning variants', value: '9', delta: '3 above baseline conversion target', tone: 'win' },
  { label: 'Guardrail holds', value: '3', delta: '2 revenue-risk sensitive', tone: 'risk' },
  { label: 'Rollout confidence', value: '88%', delta: '+6 pts over prior cycle', tone: 'win' }
];

export const experimentTrend: ExperimentTrendPoint[] = [
  { week: 'W1', activeTests: 9, shippingWins: 4, holdDecisions: 1 },
  { week: 'W2', activeTests: 10, shippingWins: 5, holdDecisions: 2 },
  { week: 'W3', activeTests: 12, shippingWins: 6, holdDecisions: 2 },
  { week: 'W4', activeTests: 14, shippingWins: 9, holdDecisions: 3 }
];

export const segmentLift: SegmentLiftPoint[] = [
  { segment: 'Mid-market inbound', conversionLift: 14, revenueLift: 11 },
  { segment: 'Enterprise nurture', conversionLift: 7, revenueLift: 10 },
  { segment: 'Partner referrals', conversionLift: 18, revenueLift: 12 },
  { segment: 'Trial-to-paid', conversionLift: 9, revenueLift: 8 },
  { segment: 'Expansion prompts', conversionLift: 6, revenueLift: 13 }
];

export const experiments: ExperimentCard[] = [
  {
    name: 'Pricing page proof stack',
    hypothesis: 'Stronger trust sequencing will increase trial starts for mid-market visitors.',
    state: 'Winning',
    confidence: '94%',
    owner: 'Growth Product'
  },
  {
    name: 'Partner demo CTA path',
    hypothesis: 'Routing channel traffic into specialized booking flows will improve qualified meetings.',
    state: 'Expand cautiously',
    confidence: '87%',
    owner: 'Revenue Ops'
  },
  {
    name: 'Lifecycle retention prompts',
    hypothesis: 'Supportive in-app prompts will reduce 30-day churn for low-usage cohorts.',
    state: 'Hold',
    confidence: '73%',
    owner: 'Customer Growth'
  }
];

export const queueItems: QueueItem[] = [
  {
    experiment: 'Lifecycle retention prompts',
    owner: 'Customer Growth',
    status: 'Guardrail breach review',
    due: 'Today',
    recommendation: 'Hold rollout',
    nextAction: 'Investigate churn-risk cohort dropoff'
  },
  {
    experiment: 'Partner demo CTA path',
    owner: 'Revenue Ops',
    status: 'Ship decision pending',
    due: 'May 8',
    recommendation: 'Expand to North America',
    nextAction: 'Approve phased rollout'
  },
  {
    experiment: 'Pricing page proof stack',
    owner: 'Growth Product',
    status: 'Executive readout prep',
    due: 'May 8',
    recommendation: 'Ship winner',
    nextAction: 'Lock proof sequence'
  },
  {
    experiment: 'Support handoff copy',
    owner: 'Lifecycle Marketing',
    status: 'Segment inconsistency',
    due: 'May 10',
    recommendation: 'Rerun with cleaner cohort',
    nextAction: 'Tighten audience rules'
  }
];

export const spotlights: SpotlightCard[] = [
  {
    title: 'The strongest wins are coming from channel and commercial surfaces',
    body: 'Partner and pricing-adjacent experiments are outperforming lifecycle tests in both conversion and revenue impact.',
    tag: 'Executive signal'
  },
  {
    title: 'Rollout pressure is rising faster than analysis capacity',
    body: 'Several experiments are statistically ready, but review bandwidth is slowing the ship-or-hold decision cycle.',
    tag: 'Needs action'
  },
  {
    title: 'Biggest operating gain',
    body: 'Cleaner segment definitions would reduce reruns and improve decision confidence on lifecycle experiments.',
    tag: 'Workflow leverage'
  }
];
