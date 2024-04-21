'use client';
import React, { useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Box,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
} from '@mui/material';
import { submitContact } from '@/app/_libs/firebase';
import { toast } from 'react-toastify';

// Define the structure of the contact state using TypeScript interface
interface ContactData {
  name: string;
  email: string;
  content: string;
  contactType: string;
}

const Contact: React.FC = () => {
  const [contactData, setContactData] = useState<ContactData>({
    name: '',
    email: '',
    content: '',
    contactType: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData({ ...contactData, [event.target.name]: event.target.value });
  };

  const handleSelectChange = (
    event: SelectChangeEvent<string>,
  ) => {
    setContactData({ ...contactData, [event.target.name as string]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const resultId = await submitContact(contactData);
      toast.success('Contact submitted successfully with ID: ' + resultId);
      setContactData({ name: '', email: '', content: '', contactType: '' }); // Reset form
    } catch (error) {
      toast.error('Failed to submit contact: ' + error);
    }
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', my: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Contact Us
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Name"
          name="name"
          value={contactData.name}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          label="Email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          margin="normal"
          type="email"
        />
        <FormControl fullWidth margin="normal">
          <InputLabel id="contact-type-label">Contact Type</InputLabel>
          <Select
            labelId="contact-type-label"
            value={contactData.contactType}
            label="Contact Type"
            name="contactType"
            onChange={handleSelectChange}
          >
            <MenuItem value="General">General</MenuItem>
            <MenuItem value="Support">Support</MenuItem>
            <MenuItem value="Sales">Sales</MenuItem>
          </Select>
        </FormControl>
        <TextField
          fullWidth
          label="Message"
          name="content"
          value={contactData.content}
          onChange={handleChange}
          margin="normal"
          multiline
          rows={4}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }}>
          Send Message
        </Button>
      </form>
    </Box>
  );
};

export default Contact;
