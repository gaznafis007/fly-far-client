import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Paper, 
  Tabs, 
  Tab, 
  TextField, 
  Button, 
  Grid,
  Typography
} from '@mui/material';
import { FaPlane, FaCalendarAlt, FaUser } from 'react-icons/fa';

function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleSearch = () => {
    const routes = ['/oneway', '/roundtrip', '/multicity'];
    navigate(routes[activeTab]);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Tabs
          value={activeTab}
          onChange={handleTabChange}
          centered
          sx={{ mb: 3 }}
        >
          <Tab label="One Way" />
          <Tab label="Round Trip" />
          <Tab label="Multi City" />
        </Tabs>

        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="From"
              variant="outlined"
              InputProps={{
                startAdornment: <FaPlane style={{ marginRight: 8 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              label="To"
              variant="outlined"
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
              variant="outlined"
              InputProps={{
                startAdornment: <FaCalendarAlt style={{ marginRight: 8 }} />,
              }}
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          {activeTab === 1 && (
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                type="date"
                label="Return Date"
                variant="outlined"
                InputProps={{
                  startAdornment: <FaCalendarAlt style={{ marginRight: 8 }} />,
                }}
                InputLabelProps={{
                  shrink: true,
                }}
              />
            </Grid>
          )}
          <Grid item xs={12} md={4}>
            <TextField
              fullWidth
              type="number"
              label="Passengers"
              variant="outlined"
              InputProps={{
                startAdornment: <FaUser style={{ marginRight: 8 }} />,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              size="large"
              onClick={handleSearch}
            >
              Search Flights
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default Home; 