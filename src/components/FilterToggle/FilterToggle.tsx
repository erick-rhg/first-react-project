interface FilterToggleProps {
  isActive: boolean;
  onToggle: () => void;
  label: string;
}

export const FilterToggle = ({
  isActive,
  onToggle,
  label,
}: FilterToggleProps) => {
  const handleChange = () => {
    onToggle();
  };

  return (
    <div>
      <label>
        <input type="checkbox" checked={isActive} onChange={handleChange} /> 
        { label}
      </label>
    </div>
  );
};
