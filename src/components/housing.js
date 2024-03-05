import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import HousingImageContainer from "../housing/housingImageContainer/housingImageContainer";
import HousingInfoContainer from "../housing/housingInfoContainer/housingInfoContainer";
import getItemFromApi from '../data/dataFetchOne';

function Housing() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        getItemFromApi(id)
            .then(result => {
                console.log(result)
                if (!result) {
                    return navigate('/error');
                }
                setItem(result);
            });
    }, [id, navigate]);

    return (
        <div>
            <HousingImageContainer key={`housing-image-${id}`} item={item}/>
            <HousingInfoContainer key={`housing-info-${id}`} item={item}/>
        </div>
    );
}

export default Housing;
