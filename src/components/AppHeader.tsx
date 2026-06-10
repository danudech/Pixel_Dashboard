import { headerActions, metrics } from "../data/office";

export function AppHeader() {
  return (
    <header className="header">
      <div className="logo">MKP Pixel Office</div>

      <div className="metrics">
        {metrics.map((metric) => (
          <span key={metric.label}>
            {metric.label} <b>{metric.value}</b>
          </span>
        ))}
      </div>

      <div className="headerActions">
        {headerActions.map((action) => (
          <button key={action}>{action}</button>
        ))}
      </div>
    </header>
  );
}
