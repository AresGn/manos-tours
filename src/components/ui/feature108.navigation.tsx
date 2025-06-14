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
    <div className="flex justify-center mb-8 lg:mb-12 px-4">
      <div className="inline-flex bg-gray-900/80 backdrop-blur-sm border border-gray-500 rounded-lg p-1 shadow-lg w-full max-w-sm md:max-w-none md:w-auto">
        {tabs.map((tab, index) => (
          <button
            key={tab.value}
            onClick={() => onTabChange(tab.value)}
            className={`
              inline-flex items-center justify-center gap-1 md:gap-2 rounded-md
              px-3 py-3 md:px-4 md:py-2.5 text-xs md:text-sm font-medium
              transition-all duration-200 whitespace-nowrap flex-1 md:flex-none
              min-h-[44px] md:min-h-auto
              ${activeTab === tab.value
                ? 'bg-blue-600 text-white shadow-lg border border-blue-400'
                : 'text-gray-100 hover:text-white hover:bg-gray-700/70 border border-transparent'
              }
            `}
            style={{
              color: activeTab === tab.value ? '#ffffff' : '#f3f4f6'
            }}
            role="tab"
            aria-selected={activeTab === tab.value}
          >
            <span className="w-4 h-4 flex-shrink-0">{tab.icon}</span>
            {/* Texte desktop - forcé avec !important */}
            <span className="!hidden md:!inline-block text-current font-medium ml-2">
              {tab.label}
            </span>
            {/* Numéro mobile */}
            <span className="md:!hidden text-xs font-bold ml-1">{index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
