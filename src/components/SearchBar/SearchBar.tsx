import styles from "./SearchBar.module.css";

interface SearchBarProps {
  value: string;
  onChange: (name: string) => void;
}

export const SearchBar = ({ value, onChange }: SearchBarProps) => {
  
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Buscar por Nombre"
      value={value}
      onChange={handleChange}
    />
  );
};
