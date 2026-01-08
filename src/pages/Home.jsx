import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import "../styles/home.css";

const Home = () => {
    const [heatIndexFilter, setHeatIndexFilter] = useState("Observed");
    const [stationFilter, setStationFilter] = useState("Classification");
    const [errorView, setErrorView] = useState("Week");

    // Function to get color based on temperature
    const getHeatColor = (temp) => {
        const tempNum = parseFloat(temp);
        if (tempNum >= 52) return '#B71C1C';
        if (tempNum >= 42) return '#F44336';
        if (tempNum >= 33) return '#FF9800';
        if (tempNum >= 27) return '#FFC107';
        return '#0066CC';
    };

    // Sample data for Average Heat Index chart
    const heatIndexData = [
        { day: '01', value: 42 },
        { day: '05', value: 40 },
        { day: '10', value: 43 },
        { day: '15', value: 41 },
        { day: '20', value: 42 },
        { day: '25', value: 43 },
        { day: '31', value: 42 }
    ];

    // Sample data for Mean Forecast Error chart
    const errorData = [
        { day: '00', value: 2.9 },
        { day: '', value: 3.0 },
        { day: '', value: 2.8 },
        { day: '', value: 2.9 },
        { day: '', value: 2.7 },
        { day: '', value: 2.6 },
        { day: '', value: 2.8 },
        { day: '', value: 2.5 },
        { day: '', value: 2.9 },
        { day: '', value: 2.7 },
        { day: '31', value: 2.6 }
    ];

    // Station Overview data
    const stations = [
        { name: "Ambulong, Batangas", heatIndex: "40°C", riskLevel: "Extreme Caution", trend: "+ 1.1° C" },
        { name: "Baguio City, Benguet", heatIndex: "42°C", riskLevel: "Extreme Caution", trend: "- 2.1° C" },
        { name: "Baler, Aurora", heatIndex: "41°C", riskLevel: "Extreme Caution", trend: "" },
        { name: "Basco, Batanes", heatIndex: "39°C", riskLevel: "Extreme Caution", trend: "" },
        { name: "Calapan, Oriental Mindoro", heatIndex: "38°C", riskLevel: "Extreme Caution", trend: "" },
        { name: "Clark Airport, Pampanga", heatIndex: "45°C", riskLevel: "Danger", trend: "" },
        { name: "Daet, Camarines Norte", heatIndex: "39°C", riskLevel: "Extreme Caution", trend: "" },
        { name: "Dagupan City, Pangasinan", heatIndex: "41°C", riskLevel: "Extreme Caution", trend: "" },
        { name: "Iba, Zambales", heatIndex: "42°C", riskLevel: "Extreme Caution", trend: "" },
        { name: "Infanta, Quezon", heatIndex: "41°C", riskLevel: "Extreme Caution", trend: "" }
    ];

    // Synoptic Stations pie chart data
    const synopticData = [
        { name: 'Caution', value: 4, color: '#FFC107' },
        { name: 'Extreme Caution', value: 51, color: '#FF9800' },
        { name: 'Danger', value: 17, color: '#F44336' },
        { name: 'Extreme Danger', value: 11, color: '#B71C1C' }
    ];

    return (
        <div className="home-page">
            {/* Top Stats Cards */}
            <div className="main-cards">
                <div className="card">
                    <h2 className="card-header">Highest Forecasted Heat Index</h2>
                    <h1 className="card-value" style={{ color: getHeatColor(44) }}>44° C</h1>
                    <p className="card-subtext">Clark Airport, Pampanga</p>
                </div>
                <div className="card">
                    <h2 className="card-header">Number of Stations in Danger-Extreme Danger</h2>
                    <h1 className="card-value">10</h1>
                    <p className="card-subtext">stations</p>
                </div>
                <div className="card">
                    <h2 className="card-header">Average Forecasted Heat Index</h2>
                    <h1 className="card-value" style={{ color: getHeatColor(41) }}>41° C</h1>
                    <p className="card-subtext">+ 1.3° C vs. yesterday</p>
                </div>
                <div className="card">
                    <h2 className="card-header">Longest Consecutive Extreme Heat</h2>
                    <h1 className="card-value">2</h1>
                    <p className="card-subtext">days</p>
                </div>
                <div className="card">
                    <p className="card-header">Most Rapidly Increasing Station (in 24 hrs)</p>
                    <p className="card-value">+1.2°C</p>
                    <p className="card-subtext">Dagupan City, Pangasinan</p>
                </div>
            </div>

            {/* Bottom 4 Boxes Grid */}
            <div className="bottom-grid">
                {/* 1. Average Heat Index Chart */}
                <div className="heat-index-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Average Heat Index</h3>
                        <select 
                            className="chart-select"
                            value={heatIndexFilter}
                            onChange={(e) => setHeatIndexFilter(e.target.value)}
                        >
                            <option>Observed</option>
                            <option>Forecasted</option>
                        </select>
                    </div>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={heatIndexData} margin={{ top: 30, right: 30, left: 0, bottom: 0 }}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                            <XAxis 
                                dataKey="day" 
                                tick={{ fontSize: 15 }}
                                axisLine={{ stroke: '#e0e0e0' }}
                            />
                            <YAxis 
                                domain={[32, 45]}
                                ticks={[32, 36, 40, 45]}
                                tick={{ fontSize: 15 }}
                                axisLine={{ stroke: '#e0e0e0' }}
                            />
                            <Tooltip />
                            <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#0066CC" 
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>

                {/* 2. Station Overview Table */}
                <div className="station-overview-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Station Overview</h3>
                        <select 
                            className="chart-select"
                            value={stationFilter}
                            onChange={(e) => setStationFilter(e.target.value)}
                        >
                            <option>Classification</option>
                            <option>Alphabetical</option>
                        </select>
                    </div>
                    <div className="table-container">
                        <table className="station-table">
                            <thead>
                                <tr>
                                    <th>Station</th>
                                    <th>Heat Index</th>
                                    <th>Risk Level</th>
                                    <th>Trend</th>
                                </tr>
                            </thead>
                            <tbody>
                                {stations.map((station, index) => (
                                    <tr key={index}>
                                        <td>{station.name}</td>
                                        <td>{station.heatIndex}</td>
                                        <td>
                                            <span className={`risk-badge ${station.riskLevel === 'Danger' ? 'danger' : 'extreme-caution'}`}>
                                                {station.riskLevel}
                                            </span>
                                        </td>
                                        <td>{station.trend}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* 3. Mean Forecast Error Chart */}
                <div className="forecast-error-card">
                    <div className="chart-header">
                        <h3 className="chart-title">Mean Forecast Error</h3>
                        <div className="chart-tabs">
                            <button 
                                className={`tab-button ${errorView === 'Week' ? 'active' : ''}`}
                                onClick={() => setErrorView('Week')}
                            >
                                Week
                            </button>
                            <button 
                                className={`tab-button ${errorView === 'Month' ? 'active' : ''}`}
                                onClick={() => setErrorView('Month')}
                            >
                                Month
                            </button>
                        </div>
                    </div>
                    <ResponsiveContainer width="100%" height={350}>
                        <LineChart 
                            data={errorData}
                            margin={{ top: 20, right: 30, left: 0, bottom: 20 }}
                        >
                            <CartesianGrid 
                                strokeDasharray="3 3" 
                                stroke="#e0e0e0" 
                                vertical={false}
                            />
                            <XAxis 
                                dataKey="day" 
                                tick={{ fontSize: 13, fill: '#666' }}
                                axisLine={{ stroke: '#e0e0e0' }}
                                tickLine={false}
                            />
                            <YAxis 
                                domain={[0, 4]}
                                ticks={[0, 1, 2, 3, 4]}
                                tick={{ fontSize: 13, fill: '#666' }}
                                axisLine={{ stroke: '#e0e0e0' }}
                                tickLine={false}
                            />
                            <Tooltip 
                                contentStyle={{ 
                                    backgroundColor: 'white',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px'
                                }}
                            />
                            <Line 
                                type="monotone" 
                                dataKey="value" 
                                stroke="#0066CC" 
                                strokeWidth={3}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                    
                    {/* Download Button */}
                    <button className="download-btn" title="Download Chart">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                            <polyline points="7 10 12 15 17 10"></polyline>
                            <line x1="12" y1="15" x2="12" y2="3"></line>
                        </svg>
                    </button>
                </div>

                {/* 4. Synoptic Stations Pie Chart */}
                <div className="synoptic-stations-card">
                    <h3 className="chart-title">Synoptic Stations</h3>
                    <div className="pie-content">
                        <div className="pie-legend">
                            {synopticData.map((item, index) => (
                                <div key={index} className="legend-item">
                                    <div className="legend-color" style={{ backgroundColor: item.color }}></div>
                                    <span className="legend-label">{item.name}</span>
                                </div>
                            ))}
                        </div>
                        <ResponsiveContainer width="50%" height={200}>
                            <PieChart>
                                <Pie
                                    data={synopticData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={90}
                                    paddingAngle={2}
                                    cornerRadius={5}
                                    dataKey="value"
                                >
                                    {synopticData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;