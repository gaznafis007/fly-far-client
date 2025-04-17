import { useState } from 'react';
import { 
  Container, 
  Paper, 
  Typography, 
  Grid, 
  TextField, 
  Button,
  Box
} from '@mui/material';
import { FaPlane, FaCalendarAlt, FaUser } from 'react-icons/fa';

function MultiCity() {
  const [flights, setFlights] = useState([
    { from: '', to: '', date: '' },
    { from: '', to: '', date: '' }
  ]);

  const handleFlightChange = (index, field, value) => {
    const newFlights = [...flights];
    newFlights[index] = { ...newFlights[index], [field]: value };
    setFlights(newFlights);
  };

  const handleAddFlight = () => {
    setFlights([...flights, { from: '', to: '', date: '' }]);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Multi-City Flights
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        {flights.map((flight, index) => (
          <Box key={index} mb={3}>
            <Typography variant="h6" gutterBottom>
              Flight {index + 1}
            </Typography>
            <Grid container spacing={2}>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="From"
                  value={flight.from}
                  onChange={(e) => handleFlightChange(index, 'from', e.target.value)}
                  InputProps={{
                    startAdornment: <FaPlane style={{ marginRight: 8 }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  label="To"
                  value={flight.to}
                  onChange={(e) => handleFlightChange(index, 'to', e.target.value)}
                  InputProps={{
                    startAdornment: <FaPlane style={{ marginRight: 8 }} />,
                  }}
                />
              </Grid>
              <Grid item xs={12} md={4}>
                <TextField
                  fullWidth
                  type="date"
                  label="Departure Date"
                  value={flight.date}
                  onChange={(e) => handleFlightChange(index, 'date', e.target.value)}
                  InputProps={{
                    startAdornment: <FaCalendarAlt style={{ marginRight: 8 }} />,
                  }}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
              </Grid>
            </Grid>
          </Box>
        ))}
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              label="Passengers"
              InputProps={{
                startAdornment: <FaUser style={{ marginRight: 8 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={8}>
            <Button
              variant="outlined"
              onClick={handleAddFlight}
              sx={{ mr: 2 }}
            >
              Add Another Flight
            </Button>
            <Button
              variant="contained"
              color="primary"
            >
              Search Flights
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default MultiCity; 