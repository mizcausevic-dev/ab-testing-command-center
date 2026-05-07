import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts';
import { experimentTrend, experiments, metrics, queueItems, segmentLift, spotlights } from './data';

export default function App() {
  return (
    <div className="shell">
      <header className="hero">
        <div className="heroCopy">
          <p className="eyebrow">A/B Testing Command Center</p>
          <h1>Hypotheses, active experiments, segment lift, and ship-or-hold rollout decisions in one experimentation control surface.</h1>
          <p className="lede">
            A recruiter-ready frontend built to feel like a real internal experimentation workspace for growth, product, lifecycle, and revenue teams
            managing test portfolios, guardrails, and decision velocity.
          </p>
        </div>
        <aside className="heroPanel">
          <span className="heroLabel">Experiment posture</span>
          <strong>Strong wins, but decision pressure is rising</strong>
          <p>Commercial and channel experiments are outperforming, while lifecycle tests are creating the most rerun and guardrail review load.</p>
        </aside>
      </header>

      <section className="metricGrid">
        {metrics.map((metric) => (
          <article key={metric.label} className={`metricCard tone-${metric.tone}`}>
            <span>{metric.label}</span>
            <strong>{metric.value}</strong>
            <p>{metric.delta}</p>
          </article>
        ))}
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Experiment flow</p>
              <h2>Active tests, shipping wins, and hold decisions</h2>
            </div>
            <span className="tag">Weekly trend</span>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={experimentTrend}>
              <defs>
                <linearGradient id="active" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#f97316" stopOpacity={0.82} />
                  <stop offset="95%" stopColor="#f97316" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="wins" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#34d399" stopOpacity={0.82} />
                  <stop offset="95%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#332a24" vertical={false} />
              <XAxis dataKey="week" stroke="#b9aa9c" />
              <YAxis stroke="#b9aa9c" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="activeTests" stroke="#f97316" fill="url(#active)" />
              <Area type="monotone" dataKey="shippingWins" stroke="#34d399" fill="url(#wins)" />
              <Area type="monotone" dataKey="holdDecisions" stroke="#ef4444" fill="none" />
            </AreaChart>
          </ResponsiveContainer>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Executive spotlight</p>
              <h2>What leadership should know now</h2>
            </div>
          </div>
          <div className="spotlightStack">
            {spotlights.map((spotlight) => (
              <div key={spotlight.title} className="spotlightCard">
                <span>{spotlight.tag}</span>
                <strong>{spotlight.title}</strong>
                <p>{spotlight.body}</p>
              </div>
            ))}
          </div>
        </article>
      </section>

      <section className="panelGrid">
        <article className="panel panel-large">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Portfolio</p>
              <h2>Experiment portfolio snapshots</h2>
            </div>
            <span className="tag">Owner aware</span>
          </div>
          <div className="cardGrid">
            {experiments.map((experiment) => (
              <article key={experiment.name} className="experimentCard">
                <p className="cardLabel">{experiment.state}</p>
                <h3>{experiment.name}</h3>
                <p>{experiment.hypothesis}</p>
                <div className="cardMeta">
                  <span>Confidence: {experiment.confidence}</span>
                  <span>{experiment.owner}</span>
                </div>
              </article>
            ))}
          </div>
        </article>

        <article className="panel">
          <div className="panelHeader">
            <div>
              <p className="panelLabel">Segment lift</p>
              <h2>Where gains are concentrated</h2>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={segmentLift}>
              <CartesianGrid stroke="#332a24" vertical={false} />
              <XAxis dataKey="segment" stroke="#b9aa9c" />
              <YAxis stroke="#b9aa9c" />
              <Tooltip />
              <Legend />
              <Bar dataKey="conversionLift" fill="#f97316" radius={[10, 10, 0, 0]} />
              <Bar dataKey="revenueLift" fill="#34d399" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </article>
      </section>

      <section className="panel">
        <div className="panelHeader">
          <div>
            <p className="panelLabel">Decision queue</p>
            <h2>Ship, hold, expand, and rerun actions</h2>
          </div>
        </div>
        <div className="tableWrap">
          <table>
            <thead>
              <tr>
                <th>Experiment</th>
                <th>Owner</th>
                <th>Status</th>
                <th>Due</th>
                <th>Recommendation</th>
                <th>Next action</th>
              </tr>
            </thead>
            <tbody>
              {queueItems.map((item) => (
                <tr key={item.experiment}>
                  <td>{item.experiment}</td>
                  <td>{item.owner}</td>
                  <td>{item.status}</td>
                  <td>{item.due}</td>
                  <td>{item.recommendation}</td>
                  <td>{item.nextAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
