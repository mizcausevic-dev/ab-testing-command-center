export type Tone = 'win' | 'watch' | 'risk';

export interface MetricCard {
  label: string;
  value: string;
  delta: string;
  tone: Tone;
}

export interface ExperimentTrendPoint {
  week: string;
  activeTests: number;
  shippingWins: number;
  holdDecisions: number;
}

export interface SegmentLiftPoint {
  segment: string;
  conversionLift: number;
  revenueLift: number;
}

export interface ExperimentCard {
  name: string;
  hypothesis: string;
  state: string;
  confidence: string;
  owner: string;
}

export interface QueueItem {
  experiment: string;
  owner: string;
  status: string;
  due: string;
  recommendation: string;
  nextAction: string;
}

export interface SpotlightCard {
  title: string;
  body: string;
  tag: string;
}
