import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

const Api = () => {
    const [isLoading, setIsLoading] = useState(true);

    const [inputValue, setInputValue] = useState('');

    const [pokemon, setPokemon] = React.useState(1)
    const agregarPokemon = e => {
        e.preventDefault()
        if (null) {
            alert('ponga un pokemon')
            return
        }
        console.log(pokemon);
        setPokemon(pokemon)
        obtenerDatos(pokemon)
        setIsLoading(false);
    }

    const obtenerDatos = async (poke) => {
        setIsLoading(true);
        if (poke == null) {
            const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + 1)
            const pokeUser = await pokemon.json()
            console.log(pokeUser);
            setEquipo(pokeUser)
            setIsLoading(false);
            return
        }
        const pokemon = await fetch('https://pokeapi.co/api/v2/pokemon/' + poke)
        const pokeUser = await pokemon.json()
        console.log(pokeUser);
        setEquipo(pokeUser)
        setIsLoading(false);
    }

    const [equipo, setEquipo] = React.useState([])

    React.useEffect(() => {
        console.log('efecto');
        document.title = 'Pokemones'
        obtenerDatos(null)
    }, [])

    console.log(pokemon);
    const ImagenPokemon = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + equipo.id + '.svg'

    const handleOnChange = (e) => {
        const { value } = e.target;
        setInputValue(value);
    };


    if (isLoading) return (
        <Box sx={{ display: 'flex' }}>
            <CircularProgress />
        </Box>
    )

    return (

        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                maxHeight='20rem'
                maxWidth='20rem'
                width='18rem'
                image={ImagenPokemon}
                alt="pokemon"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {equipo.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    <h5 className="card-title">{equipo.name}</h5>
                    <p>Peso: {equipo.weight} kg</p>
                    <p>Altura: {equipo.height} m</p>
                </Typography>
            </CardContent>

            <CardActions >
                <FormControl >
                    <TextField
                        value={inputValue}
                        id='outlined-basic'
                        label='Busca a tu pokemon'
                        variant='outlined'
                        onChange={e => setPokemon(e.target.value)}
                        value={pokemon}
                    />
                    <Button onClick={agregarPokemon} size="small" color="success">Buscar</Button>
                </FormControl>
            </CardActions>

        </Card>

    )
}

export default Api