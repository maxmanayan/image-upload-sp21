import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Card,Image, Icon} from 'semantic-ui-react'
// functional component
const Home = () => {
    // state for component
    const [memes, setMemes] = useState(null)
    const [loading, setLoading] = useState(true)
    // mount
    useEffect(()=>{
        getData()
    },[])
    const renderMemes = ()=>{
        return memes.map(meme=> (
            <Card>
            <Image src={meme.img_url} wrapped ui={false} />
            <Card.Content>
              <Card.Header>MEME</Card.Header>
              <Card.Description>
               {meme.text}
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              <a>
                <Icon name='star' />
                22 likes
              </a>
            </Card.Content>
          </Card>
        ))
    }
    const getData = async()=>{
        try{
          let res = await axios.get(`/api/memes`)
          setMemes(res.data)
          setLoading(false)
        } catch(err){
            alert('err')
            setLoading(false)
        }
    }
    if(loading) return <p>Loading</p>
    return(
        <div>
            <h1>Home</h1>
            {renderMemes()}
        </div>
    )
}
export default Home