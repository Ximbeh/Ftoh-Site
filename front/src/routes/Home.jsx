import { useContext, useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';
import Header from '../components/js/header/Header';
import NewsHome from '../components/js/News/NewsHome';
import Video from '../components/js/Video';
import { CarouselCustomNavigation } from '../components/js/Carousel';
import CarouselSchedule from '../components/js/CarouselSchedule';
import Tabela from '../components/js/Tabela/Tabela';
import Footer from '../components/js/Footer';
import { ChampionshipContext } from '../Context/ChampionshipContext';
import { useParams } from 'react-router-dom';

const GET_CHAMPIONSHIP_BY_ID = gql`
  query GetChampionshipById($id: ID!) {
    championship(id: $id) {
      id
      championshipName
    }
  }
`;

const Home = () => {
    const { id } = useParams(); // Get the championship ID from the URL
    const { selectedChampionship, setChampionship } = useContext(ChampionshipContext);
    const [championshipColorHex, setChampionshipColorHex] = useState('');

    const { id: selectedChampionshipId, name: selectedChampionshipName } = selectedChampionship;

    const { loading, error, data } = useQuery(GET_CHAMPIONSHIP_BY_ID, {
        variables: { id: id || selectedChampionshipId },
        skip: !id && !selectedChampionshipId,
    });

    useEffect(() => {
        const colorMapping = {
            fórmula1: '#ef4444',
            fórmula2: '#3b82f6',
        };

        if (selectedChampionshipName) {
            const colorKey = selectedChampionshipName.toLowerCase().replace(/ /g, '');
            setChampionshipColorHex(colorMapping[colorKey] || '#000000'); 
        }
    }, [selectedChampionshipName]);

    useEffect(() => {
        if (data && data.championship) {
            // Check if the championship is already selected to prevent infinite loops
            if (data.championship.id !== selectedChampionship.id) {
                setChampionship(data.championship.id, data.championship.championshipName);
            }
        }
    }, [data, setChampionship, selectedChampionship.id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <>
            <div>
                <Header championshipColorHex={championshipColorHex} />
                {data && data.championship && (
                    <>
                        <p>Selected Championship ID: {data.championship.id}</p>
                        <p>Selected Championship Name: {data.championship.championshipName}</p>
                        <p>Championship Color: {championshipColorHex}</p>
                    </>
                )}
                <NewsHome championshipColorHex={championshipColorHex} />
                <Video />
                <CarouselCustomNavigation championshipColorHex={championshipColorHex} />
                <Video />
                <CarouselSchedule />
                <Tabela championshipColorHex={championshipColorHex} />
                <Footer />
            </div>
        </>
    );
};

export default Home;
