export interface ITodoFilters {
  filter: 'all' | 'active' | 'completed';
  isSelected: boolean;
  text: string;
}
