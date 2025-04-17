import React, { useState } from 'react';
import { 
  Box, 
  Tab, 
  Tabs, 
  Paper, 
  Typography, 
  Radio, 
  RadioGroup, 
  FormControlLabel, 
  TextField, 
  Button, 
  Select, 
  MenuItem, 
  InputLabel, 
  FormControl,
  Grid,
  IconButton
} from '@mui/material';
import { 
  Flight, 
  Hotel, 
  Tour, 
  FlightTakeoff, 
  LocationOn, 
  CalendarToday, 
  Add 
} from '@mui/icons-material';

const Hero = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [flightType, setFlightType] = useState('one-way');
  const [multiCityFlights, setMultiCityFlights] = useState([
    { from: 'DAC', to: 'JED', fromAirport: 'Hazrat Shahjalal Intl Airport (DAC)', toAirport: 'Jeddah Intl (JED)', date: '18 Apr 25' },
    { from: 'JED', to: 'MED', fromAirport: 'Jeddah Intl (JED)', toAirport: 'Prince Mohammad Bin Abdulaziz Intl (MED)', date: '20 Apr 25' }
  ]);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFlightTypeChange = (event) => {
    setFlightType(event.target.value);
  };

  const addCity = () => {
    setMultiCityFlights([...multiCityFlights, { from: '', to: '', fromAirport: '', toAirport: '', date: '' }]);
  };

  const renderFlightTab = () => {
    if (flightType === 'multi-city') {
      return (
        <Box sx={{ p: 3 }}>
          <Box sx={{ display: 'flex', mb: 2 }}>
            <RadioGroup
              row
              value={flightType}
              onChange={handleFlightTypeChange}
              sx={{ mb: 2 }}
            >
              <FormControlLabel 
                value="round-way" 
                control={<Radio color="primary" size="small" />} 
                label={<Typography color="primary" variant="body2">ROUND-WAY</Typography>} 
              />
              <FormControlLabel 
                value="one-way" 
                control={<Radio color="primary" size="small" />} 
                label={<Typography color="primary" variant="body2">ONE-WAY</Typography>} 
              />
              <FormControlLabel 
                value="multi-city" 
                control={<Radio color="primary" size="small" checked />} 
                label={<Typography color="primary" variant="body2">MULTI-CITY</Typography>} 
              />
            </RadioGroup>
            <Box sx={{ ml: 'auto' }}>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120, mr: 1 }}>
                <Select defaultValue="1">
                  <MenuItem value="1">1 ADULT</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120, mr: 1 }}>
                <Select defaultValue="0">
                  <MenuItem value="0">0 CHILD</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
                <Select defaultValue="0">
                  <MenuItem value="0">0 INFANT</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>

          <Box sx={{ mb: 2 }}>
            <FormControl variant="outlined" size="small" fullWidth>
              <Select defaultValue="economy">
                <MenuItem value="economy">Economy</MenuItem>
                <MenuItem value="business">Business</MenuItem>
                <MenuItem value="first">First Class</MenuItem>
              </Select>
            </FormControl>
          </Box>

          {multiCityFlights.map((flight, index) => (
            <Box key={index} sx={{ mb: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">From</Typography>
                  <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>{flight.from}</Typography>
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 1, 
                      backgroundColor: '#e3f2fd' 
                    }}
                  >
                    <LocationOn sx={{ color: '#2FE5A7', mr: 1 }} />
                    <Typography variant="body2">{flight.fromAirport}</Typography>
                  </Paper>
                </Grid>
                <Grid item xs={6}>
                  <Typography variant="body2" color="textSecondary">To</Typography>
                  <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>{flight.to}</Typography>
                  <Paper 
                    variant="outlined" 
                    sx={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      p: 1, 
                      backgroundColor: '#e3f2fd' 
                    }}
                  >
                    <LocationOn sx={{ color: '#2FE5A7', mr: 1 }} />
                    <Typography variant="body2">{flight.toAirport}</Typography>
                  </Paper>
                </Grid>
              </Grid>
              <Box sx={{ mt: 2 }}>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <CalendarToday sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">{flight.date}</Typography>
                </Paper>
              </Box>
              <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                <Flight sx={{ color: '#2FE5A7', fontSize: 40, transform: 'rotate(90deg)' }} />
              </Box>
            </Box>
          ))}

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              sx={{ mr: 1, py: 1.5, borderRadius: 1 }}
            >
              SEARCH FOR FLIGHT
            </Button>
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              sx={{ ml: 1, py: 1.5, borderRadius: 1 }}
              onClick={addCity}
            >
              Add City
            </Button>
          </Box>
        </Box>
      );
    }

    return (
      <Box sx={{ p: 3 }}>
        <Box sx={{ display: 'flex', mb: 2 }}>
          <RadioGroup
            row
            value={flightType}
            onChange={handleFlightTypeChange}
            sx={{ mb: 2 }}
          >
            {flightType === 'round-way' ? (
              <FormControlLabel 
                value="round-way" 
                control={<Radio color="primary" size="small" checked />} 
                label={<Typography color="primary" variant="body2">ROUND-WAY</Typography>} 
              />
            ) : (
              <FormControlLabel 
                value="round-way" 
                control={<Radio color="primary" size="small" />} 
                label={<Typography color="primary" variant="body2">ROUND-WAY</Typography>} 
              />
            )}
            {flightType === 'one-way' ? (
              <FormControlLabel 
                value="one-way" 
                control={<Radio color="primary" size="small" checked />} 
                label={<Typography color="primary" variant="body2">ONE-WAY</Typography>} 
              />
            ) : (
              <FormControlLabel 
                value="one-way" 
                control={<Radio color="primary" size="small" />} 
                label={<Typography color="primary" variant="body2">ONE-WAY</Typography>} 
              />
            )}
            <FormControlLabel 
              value="multi-city" 
              control={<Radio color="primary" size="small" />} 
              label={<Typography color="primary" variant="body2">MULTI-CITY</Typography>} 
            />
          </RadioGroup>
          <Box sx={{ ml: 'auto' }}>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120, mr: 1 }}>
              <Select defaultValue="1">
                <MenuItem value="1">1 ADULT</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120, mr: 1 }}>
              <Select defaultValue="0">
                <MenuItem value="0">0 CHILD</MenuItem>
              </Select>
            </FormControl>
            <FormControl variant="outlined" size="small" sx={{ minWidth: 120 }}>
              <Select defaultValue="0">
                <MenuItem value="0">0 INFANT</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        <Box sx={{ mb: 2 }}>
          <FormControl variant="outlined" size="small" fullWidth>
            <Select defaultValue="economy">
              <MenuItem value="economy">Economy</MenuItem>
              <MenuItem value="business">Business</MenuItem>
              <MenuItem value="first">First Class</MenuItem>
            </Select>
          </FormControl>
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">FROM</Typography>
            <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>DAC</Typography>
            <Paper 
              variant="outlined" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                p: 1, 
                backgroundColor: '#e3f2fd' 
              }}
            >
              <LocationOn sx={{ color: '#2FE5A7', mr: 1 }} />
              <Typography variant="body2">Hazrat Shahjalal Intl Airport (DAC)</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="textSecondary">TO</Typography>
            <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>CXB</Typography>
            <Paper 
              variant="outlined" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                p: 1, 
                backgroundColor: '#e3f2fd' 
              }}
            >
              <LocationOn sx={{ color: '#2FE5A7', mr: 1 }} />
              <Typography variant="body2">Cox's Bazar Airport(CXB)</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
          <Flight sx={{ color: '#2FE5A7', fontSize: 40, transform: 'rotate(90deg)' }} />
        </Box>

        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Paper 
              variant="outlined" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                p: 1, 
                backgroundColor: '#e3f2fd' 
              }}
            >
              <CalendarToday sx={{ color: '#2FE5A7', mr: 1 }} />
              <Typography variant="body2">18 Apr 25</Typography>
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper 
              variant="outlined" 
              sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                p: 1, 
                backgroundColor: '#e3f2fd' 
              }}
            >
              <CalendarToday sx={{ color: '#2FE5A7', mr: 1 }} />
              <Typography variant="body2">20 Apr 25</Typography>
            </Paper>
          </Grid>
        </Grid>

        <Button 
          variant="contained" 
          color="success" 
          fullWidth 
          sx={{ mt: 3, py: 1.5, borderRadius: 1 }}
        >
          SEARCH FOR FLIGHT
        </Button>
      </Box>
    );
  };

  const renderHotelTab = () => {
    return (
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">DESTINATION</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>DHAKA</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <LocationOn sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">DHAKA,BANGLADESH</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">CHECK IN</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>17 APR, 2025</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <CalendarToday sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">17 APR 25,THURSDAY</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">CHECK OUT</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>17 APR, 2025</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <CalendarToday sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">17 APR 25,THURSDAY</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Typography variant="body2" color="textSecondary" sx={{ mb: 1 }}>Guests & Rooms</Typography>
            <Paper 
              variant="outlined" 
              sx={{ 
                p: 1, 
                backgroundColor: '#f0f4ff',
                mb: 2
              }}
            >
              <Typography variant="body2">1 ROOM, 1 GUESTS, 1 ADULTS</Typography>
            </Paper>
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              sx={{ mt: 4, py: 1.5, borderRadius: 1 }}
            >
              SEARCH FOR HOTEL
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderTourTab = () => {
    return (
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">DESTINATION TYPE</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>INTERNATIONAL</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <Tour sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">INTERNATIONAL</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">WHERE?</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>ROME,VASNIS</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <LocationOn sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">BANGLADESH (BD)</Typography>
                </Paper>
              </Grid>
              <Grid item xs={4}>
                <Typography variant="body2" color="textSecondary">WHEN?</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>01 APR 2025</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <CalendarToday sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">01 APR 2025</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              sx={{ mb: 2, py: 1.5, borderRadius: 1 }}
            >
              SEARCH ALL TOUR
            </Button>
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              sx={{ py: 1.5, borderRadius: 1 }}
            >
              SEARCH FOR TOUR
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  const renderVisaTab = () => {
    return (
      <Box sx={{ p: 3 }}>
        <Grid container spacing={2} sx={{ mb: 2 }}>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary">DESTINATION CITY OR COUNTRY</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>INDIA</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <Tour sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">INDIA</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="textSecondary">SELECT VISA TYPE</Typography>
                <Typography variant="h4" color="#2FE5A7" sx={{ my: 1 }}>TOURIST VISA</Typography>
                <Paper 
                  variant="outlined" 
                  sx={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    p: 1, 
                    backgroundColor: '#e3f2fd' 
                  }}
                >
                  <LocationOn sx={{ color: '#2FE5A7', mr: 1 }} />
                  <Typography variant="body2">TOURIST VISA</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Button 
              variant="contained" 
              color="success" 
              fullWidth 
              sx={{ mt: 8, py: 1.5, borderRadius: 1 }}
            >
              SEARCH FOR TOUR
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  };

  return (
    <Box 
      sx={{ 
        width: '100%', 
        height: '100vh', 
        backgroundImage: 'url(https://images.unsplash.com/photo-1507525428034-b723cf961d3e)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        p: 2
      }}
    >
      <Paper 
        elevation={3} 
        sx={{ 
          width: '100%', 
          maxWidth: 1000, 
          borderRadius: 2,
          overflow: 'hidden'
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider', bgcolor: 'white', borderRadius: '16px 16px 0 0' }}>
          <Tabs 
            value={activeTab} 
            onChange={handleTabChange} 
            variant="fullWidth" 
            sx={{ 
              '& .MuiTab-root': { 
                borderRadius: '50px',
                mx: 0.5,
                my: 1,
                minHeight: '40px',
                color: '#2FE5A7'
              },
              '& .Mui-selected': {
                bgcolor: '#2FE5A7',
                color: 'white !important',
                borderRadius: '50px',
              }
            }}
          >
            <Tab 
              icon={<Flight />} 
              label="FLIGHT" 
              sx={{ 
                bgcolor: activeTab === 0 ? '#2FE5A7' : 'transparent',
                color: activeTab === 0 ? 'white' : '#2FE5A7',
              }} 
            />
            <Tab 
              icon={<Hotel />} 
              label="HOTEL" 
              sx={{ 
                bgcolor: activeTab === 1 ? '#2FE5A7' : 'transparent',
                color: activeTab === 1 ? 'white' : '#2FE5A7',
              }} 
            />
            <Tab 
              icon={<Tour />} 
              label="TOUR" 
              sx={{ 
                bgcolor: activeTab === 2 ? '#2FE5A7' : 'transparent',
                color: activeTab === 2 ? 'white' : '#2FE5A7',
              }} 
            />
            <Tab 
              icon={<FlightTakeoff />} 
              label="VISA" 
              sx={{ 
                bgcolor: activeTab === 3 ? '#2FE5A7' : 'transparent',
                color: activeTab === 3 ? 'white' : '#2FE5A7',
              }} 
            />
          </Tabs>
        </Box>
        {activeTab === 0 && renderFlightTab()}
        {activeTab === 1 && renderHotelTab()}
        {activeTab === 2 && renderTourTab()}
        {activeTab === 3 && renderVisaTab()}
      </Paper>
    </Box>
  );
};

export default Hero;