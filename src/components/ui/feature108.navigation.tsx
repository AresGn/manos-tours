import React from 'react';
import type { Tab } from './feature108.types';

interface TabNavigationProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (value: string) => void;
}

export const TabNavigation: React.FC<TabNavigationProps> = ({ 
  tabs, 
  activeTab, 
  onTabChange 
}) => {
  return (
    <div className="flex justify-center mb-8 lg:mb-12">
      <div className="inline-flex bg-gray-800/70 backdrop-blur-sm border border-gray-600 rounded-lg p-1 shadow-lg">
        {tabs.map((tab, index) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`
              inline-flex items-center gap-2 rounded-md px-4 py-2.5 text-sm font-medium 
              transition-all duration-200 whitespace-nowrap
              ${activeTab === tab.value 
                ? 'bg-blue-600 text-white shadow-md' 
                : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }
            `}
            aria-pressed={activeTab === tab.value}
            role="tab"
            aria-selected={activeTab === tab.value}
          >
            <span className="w-4 h-4 flex-shrink-0">{tab.icon}</span>
            <span className="hidden md:inline">{tab.label}</span>
            <span className="md:hidden font-semibold">{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
