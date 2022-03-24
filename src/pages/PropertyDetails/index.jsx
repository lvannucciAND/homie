import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import Layout from 'components/Layout';
import Title from 'components/Title';
import { Autocomplete,
    TextField,
    Stack,
    Radio,
    RadioGroup,
    FormControlLabel,
    FormControl,
    FormLabel,
    Button,
} from '@mui/material';
import { getAddress } from 'utilities/getAddress';

const PropertyDetails = ({ onPropertyChange }) => {
    const history = useHistory();
    const [ postcode, setPostcode ] = useState('');
    const [ addressOptions, setAddressOptions ] = useState([]);
    const [ selectedAddress, setSelectedAddress ] = useState({});
    const [ isFullyFurnished, setFullyFurnished ] = useState(true);

    const location = useLocation();

    const user = location.state.user;

    const getTotalOptions = () => {
        const count = addressOptions.length;
        return `${count} results`;
    };

    const getAutocompleteOptions = (addressOptions) => {
        return addressOptions.map((o, i) => {
            return {
                id: i,
                label: o.summaryline,
            }
        });
    };

    const handlePostcodeChange = (e) => {
        setPostcode(e.target.value);
    };

    const handlePostcodeSubmit = (e) => {
        e.preventDefault();

        const options = getAddress(postcode.trim()); // TODO: call to API, add async handler
        
        setAddressOptions(options);
    };

    const handleFormSubmit = () => {
        onPropertyChange({
            address: selectedAddress,
            isFullyFurnished,
        });

        history.push('/move-date');

    };

    return (
        <Layout>
            <Stack 
                spacing={10}
                justifyContent="center"
                alignItems="center"
            >
                <Title text="Set the Address" size='28px'/>
                <Stack spacing={2}>
                    <form onSubmit={handlePostcodeSubmit}>
                        <TextField 
                            id="postcode" 
                            label="Postcode" 
                            variant="filled"
                            sx={{ width: 350, color: 'white', bgcolor: '#3C3486' }}
                            onChange={handlePostcodeChange}
                            InputLabelProps={{ sx: {
                                color: 'white',
                            }}}
                            inputProps={{sx: {
                                color: 'white',
                            },
                            }}
                            
                        />
                    </form>

                    {!!addressOptions.length && postcode && (
                        <Autocomplete
                            disablePortal
                            id="results"
                            options={getAutocompleteOptions(addressOptions)}
                            sx={{ width: 350, color: 'white', bgcolor: '#7678E5', border: 0 }}
                            renderInput={(params) => <TextField {...params} label={getTotalOptions()} />}
                            onChange={(e, v) => setSelectedAddress(addressOptions[v.id])}
                        />
                    )}
                </Stack>
                <Stack>
                    <FormControl>
                        <Stack
                            justifyContent="center"
                            alignItems="center"
                            spacing={1}
                        >
                            <Title text="Furnished Type:" size='20px'/>

                            <FormLabel 
                                id="property-furniture"
                            />
                            <RadioGroup
                                aria-labelledby="property-furniture"
                                defaultValue="furnished"
                                name="radio-buttons-group"
                                
                            >                                
                                <FormControlLabel 
                                    value="furnished" 
                                    control={<Radio color="secondary" size="small" />} 
                                    label="Furnished" 
                                    onChange={() => setFullyFurnished(true)}
                                />
                                <FormControlLabel 
                                    value="not-fully-furnished" 
                                    control={<Radio color="secondary" size="small"/>} 
                                    label="Part-Furnished/UnFurnished" 
                                    onChange={() => setFullyFurnished(false)}
                                />
                            </RadioGroup>
                        </Stack>
                    </FormControl>
                </Stack>
                <Button
                    variant="text"
                    sx={{ color: 'white', fontWeight: 'bold', bgcolor: 'warning.main' }}
                    size="large"
                    onClick={handleFormSubmit}
                >
                    Submit
                </Button>
            </Stack>
        </Layout>
    );
};

export default PropertyDetails;