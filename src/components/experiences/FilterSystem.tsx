'use client';

import { useState } from 'react';
import { 
  Search,
  Filter,
  X,
  ChevronDown
} from 'lucide-react';
import { CircuitFilter, CircuitCategory, CircuitDuration, CircuitDifficulty } from '@/types/circuits';
import { categoriesMetadata } from '@/data/circuits';

interface FilterSystemProps {
  filters: CircuitFilter;
  onFiltersChange: (filters: CircuitFilter) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  showAdvanced?: boolean;
}

export default function FilterSystem({
  filters,
  onFiltersChange,
  searchTerm,
  onSearchChange,
  showAdvanced = false
}: FilterSystemProps) {
  const [showAdvancedFilters, setShowAdvancedFilters] = useState(showAdvanced);

  const updateFilter = (key: keyof CircuitFilter, value: any) => {
    onFiltersChange({
      ...filters,
      [key]: value
    });
  };

  const resetFilters = () => {
    onFiltersChange({});
    onSearchChange('');
  };

  const hasActiveFilters = Object.keys(filters).length > 0 || searchTerm;

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6">
      {/* Barre de recherche principale */}
      <div className="relative mb-4">
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Rechercher un circuit..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-white rounded-xl border-0 focus:ring-2 focus:ring-blue-500 text-gray-900 placeholder-gray-500"
        />
      </div>

      {/* Filtres rapides par catégorie */}
      <div className="flex flex-wrap gap-2 mb-4">
        {Object.entries(categoriesMetadata).map(([key, category]) => (
          <button
            key={key}
            onClick={() => {
              const currentCategories = filters.categories || [];
              const categoryKey = key as CircuitCategory;
              const newCategories = currentCategories.includes(categoryKey)
                ? currentCategories.filter(c => c !== categoryKey)
                : [...currentCategories, categoryKey];
              updateFilter('categories', newCategories.length > 0 ? newCategories : undefined);
            }}
            className={`px-4 py-2 rounded-full transition-all duration-300 text-sm ${
              filters.categories?.includes(key as CircuitCategory)
                ? `bg-gradient-to-r ${category.color} text-white`
                : 'bg-white/20 text-white hover:bg-white/30'
            }`}
          >
            {category.icon} {category.nom}
          </button>
        ))}
      </div>

      {/* Bouton filtres avancés */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
          className="flex items-center gap-2 px-4 py-2 bg-white/20 text-white rounded-full hover:bg-white/30 transition-all duration-300"
        >
          <Filter className="w-4 h-4" />
          Filtres avancés
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${showAdvancedFilters ? 'rotate-180' : ''}`} />
        </button>

        {hasActiveFilters && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-2 px-4 py-2 bg-red-500/20 text-red-200 rounded-full hover:bg-red-500/30 transition-all duration-300"
          >
            <X className="w-4 h-4" />
            Réinitialiser
          </button>
        )}
      </div>

      {/* Filtres avancés */}
      {showAdvancedFilters && (
        <div className="grid md:grid-cols-3 gap-4 p-4 bg-white/5 rounded-xl">
          {/* Filtre par durée */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Durée
            </label>
            <div className="space-y-2">
              {(['courte', 'moyenne', 'longue'] as CircuitDuration[]).map((duree) => (
                <label key={duree} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.dureeType?.includes(duree) || false}
                    onChange={(e) => {
                      const currentDurees = filters.dureeType || [];
                      const newDurees = e.target.checked
                        ? [...currentDurees, duree]
                        : currentDurees.filter(d => d !== duree);
                      updateFilter('dureeType', newDurees.length > 0 ? newDurees : undefined);
                    }}
                    className="mr-2 rounded"
                  />
                  <span className="text-white text-sm capitalize">
                    {duree === 'courte' && 'Courte (< 2h)'}
                    {duree === 'moyenne' && 'Moyenne (2-4h)'}
                    {duree === 'longue' && 'Longue (> 4h)'}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtre par difficulté */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Difficulté
            </label>
            <div className="space-y-2">
              {(['Facile', 'Modéré', 'Difficile'] as CircuitDifficulty[]).map((difficulte) => (
                <label key={difficulte} className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.difficulte?.includes(difficulte) || false}
                    onChange={(e) => {
                      const currentDifficulties = filters.difficulte || [];
                      const newDifficulties = e.target.checked
                        ? [...currentDifficulties, difficulte]
                        : currentDifficulties.filter(d => d !== difficulte);
                      updateFilter('difficulte', newDifficulties.length > 0 ? newDifficulties : undefined);
                    }}
                    className="mr-2 rounded"
                  />
                  <span className="text-white text-sm">{difficulte}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Filtre par prix */}
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Prix (F CFA)
            </label>
            <div className="space-y-3">
              <div>
                <label className="block text-xs text-gray-300 mb-1">Prix minimum</label>
                <input
                  type="number"
                  placeholder="0"
                  value={filters.prixMin || ''}
                  onChange={(e) => updateFilter('prixMin', e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full px-3 py-2 bg-white/20 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-xs text-gray-300 mb-1">Prix maximum</label>
                <input
                  type="number"
                  placeholder="100000"
                  value={filters.prixMax || ''}
                  onChange={(e) => updateFilter('prixMax', e.target.value ? Number(e.target.value) : undefined)}
                  className="w-full px-3 py-2 bg-white/20 text-white placeholder-gray-400 rounded-lg border-0 focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Autres filtres */}
          <div className="md:col-span-3">
            <div className="flex flex-wrap gap-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={filters.bateauRequis || false}
                  onChange={(e) => updateFilter('bateauRequis', e.target.checked || undefined)}
                  className="mr-2 rounded"
                />
                <span className="text-white text-sm">Avec transport en bateau</span>
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Résumé des filtres actifs */}
      {hasActiveFilters && (
        <div className="mt-4 p-3 bg-blue-500/20 rounded-lg">
          <div className="flex items-center justify-between">
            <span className="text-sm text-blue-200">
              {Object.keys(filters).length} filtre{Object.keys(filters).length > 1 ? 's' : ''} actif{Object.keys(filters).length > 1 ? 's' : ''}
              {searchTerm && ' + recherche'}
            </span>
            <button
              onClick={resetFilters}
              className="text-xs text-blue-200 hover:text-white underline"
            >
              Tout effacer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
