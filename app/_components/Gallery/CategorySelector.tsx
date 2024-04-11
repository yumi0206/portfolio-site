import React, { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import { Category } from '@/app/_libs/microcms';

type CategorySelectorProps = {
  categories: Category[];
  selectedCategory: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
};

const CategorySelector: React.FC<CategorySelectorProps> = ({
  categories,
  selectedCategory,
  setSelectedCategory,
}) => {
  useEffect(() => {
    console.log(selectedCategory);
  }, [selectedCategory]);

  const handleChange = (event: SelectChangeEvent) => {
    setSelectedCategory(event.target.value as string);
  };

  return (
    <Box sx={{ my: 4, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <FormControl variant="outlined" sx={{ minWidth: 120 }}>
        <InputLabel id="category-select-label">Select Album</InputLabel>
        <Select
          labelId="category-select-label"
          id="category-select"
          value={selectedCategory}
          onChange={handleChange}
          label="Select Album"
        >
          <MenuItem value="all">All</MenuItem>
          {categories.map((category) => (
            <MenuItem key={category.id} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default CategorySelector;
