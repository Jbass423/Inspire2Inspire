import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const RandomImage = ()=>{
    const dispatch = useDispatch()
    const images = useSelector(store=> store.images)
    const history = useHistory()

    useEffect(()=>{
        dispatch({type: 'FETCH_IMAGES'})
    }, [])

    const handleRandom = ()=>{
        if(images.length > 0 ){
            const randomIndex = Math.floor(Math.random()* images.length)
            const randomId = images[randomIndex].id
            history.push(`/images/${randomId}`)
        }
    }
    return ( 
        <button onClick={handleRandom}> go to random  </button>
    )
}

export default RandomImage