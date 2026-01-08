import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { HeartPulse, Bike, Building, Sprout, BriefcaseMedical, CalendarRange, Building2, Megaphone } from 'lucide-react';
import "../styles/station.css";

const Station = () => {
    
    const trendData = [
        { day: '00', model: 40, pagasa: 38 },
        { day: '05', model: 42, pagasa: 41 },
        { day: '10', model: 39, pagasa: 40 },
        { day: '15', model: 37, pagasa: 38 },
        { day: '20', model: 38, pagasa: 37 },
        { day: '25', model: 39, pagasa: 38 },
        { day: '31', model: 40, pagasa: 39 }
    ];

    return (
        <div className="station-page">
            <div className="main-cards">
                <div className="card small-card">
                    <h2 className="card-header">Forecasted Heat Index</h2>
                    <h1 className="card-value">44°C</h1>
                    <p className="card-subtext">Danger Level</p>
                </div>
                <div className="card small-card">
                    <h2 className="card-header">Heat Index Change</h2>
                    <h1 className="card-value">+1.2°C</h1>
                    <p className="card-subtext">vs. yesterday</p>
                </div>
                <div className="card small-card">
                    <h2 className="card-header">Station Risk Rank</h2>
                    <h1 className="card-value">#2/23</h1>
                    <p className="card-subtext">stations in Luzon</p>
                </div>
                <div className="card small-card">
                    <h2 className="card-header">Model Confidence</h2>
                    <div className="model-metrics">
                        <div>
                            <span>RMSE</span>
                            <span>2.1</span>
                        </div>
                        <div>
                            <span>MAE</span>
                            <span>2.1</span>
                        </div>
                        <div>
                            <span>R²</span>
                            <span>2.1</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="analytics-grid">
                <div className="card small-card">
                    <div className="card-header">Forecasted Heat Index</div>
                    <div className="card-subheader">January 7, 2026</div>
                    <div className="card-value">43° C</div>
                </div>
                <div className="card small-card">                        
                    <div className="card-header">Forecasted Heat Index</div>
                    <div className="card-subheader">January 8, 2026</div>
                    <div className="card-value">44° C</div>
                </div>

                <div className="card large-card">
                    <h1 className="card-title">Heat Index Trend</h1>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={trendData} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="model" stroke="#1666BA" activeDot={{ r: 4 }} name="Model Prediction"/>
                            <Line type="monotone" dataKey="pagasa" stroke="#7AB3EF" name="PAGASA Prediction"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="card wide-card">
                    <h1 className="card-title">Mean Forecast Error</h1>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={trendData} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="day" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="model" stroke="#1666BA" activeDot={{ r: 4 }} name="Model Prediction"/>
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                <div className="card large-card">
                    <h1 className="card-title">Heat Index Potential Effects</h1>
                    <table className="risk-table">
                    <tbody>
                        <tr>
                        <td className="icon"><HeartPulse /></td>
                        <td>
                            <strong>Health Risk</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>

                        <tr>
                        <td className="icon"><Bike /></td>
                        <td>
                            <strong>Daily Activities</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>

                        <tr>
                        <td className="icon"><Building /></td>
                        <td>
                            <strong>Infrastructure Stress</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>

                        <tr>
                        <td className="icon"><Sprout /></td>
                        <td>
                            <strong>Environmental Stress</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
                <div className="card large-card">
                    <h1 className="card-title">Recommended Interventions</h1>
                    <table className="risk-table">
                    <tbody>
                        <tr>
                        <td className="icon"><BriefcaseMedical /></td>
                        <td>
                            <strong>Health Risk</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>

                        <tr>
                        <td className="icon"><CalendarRange /></td>
                        <td>
                            <strong>Daily Activities</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>

                        <tr>
                        <td className="icon"><Building2 /></td>
                        <td>
                            <strong>Infrastructure Stress</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>

                        <tr>
                        <td className="icon"><Megaphone /></td>
                        <td>
                            <strong>Environmental Stress</strong>
                            <p>Fatigue possible with prolonged exposure and/or physical activity</p>
                        </td>
                        </tr>
                    </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Station;