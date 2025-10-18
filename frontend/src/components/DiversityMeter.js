import React from 'react';

function DiversityMeter({ sources }) {
  // Calculate diversity metrics
  const regions = [...new Set(sources.map(s => s.region))];
  const leanings = [...new Set(sources.map(s => s.leaning))];

  const diversityScore = Math.min(100, ((regions.length * 20) + (leanings.length * 15) + (sources.length * 8)));

  const getScoreColor = (score) => {
    if (score >= 75) return { backgroundColor: 'rgb(34, 197, 94)' };
    if (score >= 50) return { backgroundColor: 'rgb(234, 179, 8)' };
    return { backgroundColor: 'rgb(239, 68, 68)' };
  };

  return (
    <div>
      <h3 className="text-sm font-semibold text-gray-900 mb-3">Source Diversity</h3>

      {/* Progress Bar */}
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-600 mb-1">
          <span>Diversity Score</span>
          <span className="font-bold">{diversityScore}/100</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="h-2 rounded-full"
            style={{ width: `${diversityScore}%`, ...getScoreColor(diversityScore) }}
          ></div>
        </div>
      </div>

      {/* Breakdown */}
      <div className="space-y-2 text-xs">
        <div>
          <span className="font-medium text-gray-700">Outlets:</span>
          <span className="ml-2 text-gray-600">{sources.length}</span>
        </div>
        <div>
          <span className="font-medium text-gray-700">Regions:</span>
          <div className="mt-1 flex flex-wrap gap-1">
            {regions.map((region, idx) => (
              <span key={idx} className="px-2 py-0.5 rounded text-xs"
                    style={{ backgroundColor: 'rgba(0, 0, 255, 0.1)', color: 'rgb(0, 0, 255)' }}>
                {region}
              </span>
            ))}
          </div>
        </div>
        <div>
          <span className="font-medium text-gray-700">Leanings:</span>
          <div className="mt-1 flex flex-wrap gap-1">
            {leanings.map((leaning, idx) => (
              <span key={idx} className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs">
                {leaning}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Source List */}
      <div className="mt-4 pt-4 border-t border-gray-200">
        <h4 className="text-xs font-semibold text-gray-700 mb-2">Sources</h4>
        <ul className="space-y-1">
          {sources.map((source, idx) => (
            <li key={idx} className="text-xs text-gray-600">
              • {source.domain}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default DiversityMeter;
