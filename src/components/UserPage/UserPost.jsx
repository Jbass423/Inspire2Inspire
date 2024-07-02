import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

const UserPost = () => {
    const user = useSelector(store => store.user)
    const dispatch = useDispatch()
    const [image, setImage] = useState("")

    const sendImage = (event) => {
        event.preventDefault()
        dispatch({ type: 'SEND_IMAGE', payload: { url: image, user_id: user.id } })
        setImage('')
    }

    return (
        <form onSubmit={sendImage}>
            <label htmlFor="imageUrl">URL</label>
            <input
                id="imageUrl"
                type="text"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            />
            <button type="submit">Submit</button>
        </form>

    )
}

export default UserPost