import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Layout from 'components/Layout';
import Title from 'components/Title';
import AmountInput from 'components/AmountInput';
import { 
    Stack,
    Box,
    Button,
} from '@mui/material';

const Estimation = ({ property, onEstimationSubmit }) => {
    const history = useHistory();
    const [ rent, setRent ] = useState(1100);
    const [ electricity, setElectricity ] = useState(40);
    const [ gas, setGas ] = useState(10);
    const [ councilTax, setCouncilTax ] = useState(120);
    const [ water, setWater ] = useState(15);
    const [ internet, setInternet ] = useState(20);
    const [ food, setFood ] = useState(0);
    const [ misc, setMisc ] = useState(0);
    const [ total, setTotal ] = useState(undefined);

    const calcTotalAmount = () => {
        const total = rent + electricity + gas + councilTax + water + internet + food + misc;
        setTotal(total);
    };

    useEffect(() => {
        // TODO implement 3rd part API that will calc estimations based on postcode
        calcTotalAmount();
    }, [rent,
        electricity,
        gas,
        councilTax,
        water,
        internet,
        food,
        misc,
    ]);


    const handleFormSubmit = () => {
        onEstimationSubmit({
            rent,
            electricity,
            gas,
            councilTax,
            water,
            internet,
            food,
            misc,
            total,
        });

        history.push('/rooms');
    };

    return (
        <Layout>
            <Stack
                justifyContent="center"
                alignItems="center"
                spacing={4}
            >
                <Title text="Monthly costs estimation" />
                <Box
                    sx={{
                        width: 300,
                        backgroundColor: '#7677E5',
                        borderRadius: '20px',
                        padding: '40px 25px',
                    }}
                >
                    <Stack
                        spacing={2}
                    >
                        <Stack
                            justifyContent="space-between"
                            direction="row"
                        >
                            <AmountInput description="Rent" amount={rent} onChange={(e) => setRent(Number(e.target.value))}/>
                            <AmountInput description="Electricity" amount={electricity} onChange={(e) => setElectricity(Number(e.target.value))}/>
                        </Stack>                       
                        <Stack
                            justifyContent="space-between"
                            direction="row"
                        >
                            <AmountInput description="Gas" amount={gas} onChange={(e) => setGas(Number(e.target.value))}/>
                            <AmountInput description="Council Tax" amount={councilTax} onChange={(e) => setCouncilTax(Number(e.target.value))}/>
                        </Stack>                       
                        <Stack
                            justifyContent="space-between"
                            direction="row"
                        >
                            <AmountInput description="Water" amount={water} onChange={(e) => setWater(Number(e.target.value))}/>
                            <AmountInput description="Internet" amount={internet} onChange={(e) => setInternet(Number(e.target.value))}/>
                        </Stack>                       
                        <Stack
                            justifyContent="space-between"
                            direction="row"
                        >
                            <AmountInput description="Food" amount={food} onChange={(e) => setFood(Number(e.target.value))}/>
                            <AmountInput description="Misc" amount={misc} onChange={(e) => setMisc(Number(e.target.value))}/>
                        </Stack>                       
                        <Stack
                            justifyContent="center"
                            direction="row"
                        >
                            <AmountInput description="TOTAL" amount={total} />
                        </Stack>                       

                    </Stack>
                </Box>

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
    )
};

export default Estimation;