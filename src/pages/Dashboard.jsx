import React from 'react';

const Dashboard = () => {
    return (
        <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Progress</h3>
                    <p className="mt-2 text-3xl font-bold text-primary">65%</p>
                    <p className="text-sm text-gray-500">Course completion</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Practice Problems</h3>
                    <p className="mt-2 text-3xl font-bold text-primary">42</p>
                    <p className="text-sm text-gray-500">Solved this week</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h3 className="text-lg font-medium text-gray-900">Assessments</h3>
                    <p className="mt-2 text-3xl font-bold text-primary">3</p>
                    <p className="text-sm text-gray-500">Pending review</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
