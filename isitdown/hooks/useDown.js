import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const useDown = () => {

    const baseUrl = 'https://downapi.danielmattox.com'

    const history = useHistory()
    const [stats, updateStats] = useState({
        total: 0,
        visits: 0
    })
    const [message, updateMessage] = useState({
        text: null
    })

    useEffect(() => {
        getStats()
    }, [])

    const addUrl = url => {
        axios.post(`${baseUrl}/v1/submit`, url).then(res => {
            // put the data into the app, dependent on error message if any
        }).catch(err => {
            if (err.response) { // (5xx, 4xx)
                updateMessage({
                    text: err.error
                })
            }
            else if (err.request) { // No response or unable to send
                updateMessage({
                    text: 'The server could not be reached.'
                })
            } else { // The world is ending
                updateMessage({
                    text: 'The world is literally ending, right now.'
                })
            }
        })
    }

    const resetAll = () => {
        updateMessage({
            text: null
        })
        getStats()
        history.push('/')
    }

    const getStats = () => {
        axios.get(`${baseUrl}/stats`).then(res => {
            updateStats({
                total: res.data.total,
                clicks: res.data.clicks,
                visits: res.data.visits
            })
        }).catch(err => {
            if (err.response) { // (5xx, 4xx)
                updateMessage({
                    text: err.error
                })
            }
            else if (err.request) { // No response or unable to send
                updateMessage({
                    text: 'The server could not be reached.'
                })
            } else { // The world is ending
                updateMessage({
                    text: 'The world is literally ending, right now.'
                })
            }
        })
    }

    return [stats, addUrl, message, resetAll]
}