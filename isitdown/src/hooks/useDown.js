import { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

export const useDown = () => {

    //const baseUrl = 'https://downapi.danielmattox.com'
    const baseUrl = 'http://localhost:5757'

    const history = useHistory()
    const [stats, updateStats] = useState({
        total: 0,
        visits: 0
    })
    const [info, updateInfo] = useState({
        timesChecked: 0,
        time: 0,
        timesDown: 0,
        up: false,
        url: 'ohno.com'
    })
    const [message, updateMessage] = useState({
        text: null
    })

    useEffect(() => {
        getStats()
    }, [])

    const addUrl = url => {
        axios.post(`${baseUrl}/v1/submit`, url).then(res => {
            updateInfo({
                timesChecked: res.data.timesChecked,
                time: res.data.times[res.data.times.length - 1] || 69.420,
                timesDown: res.data.timesDown,
                up: res.data.up,
                url: res.data.url
            })
            updateMessage({
                text: null
            })
            history.push('/success')
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
        updateInfo({
            timesChecked: 0,
            times: [],
            timesDown: 0,
            up: false,
            url: 'ohno.com'
        })
        history.push('/')
    }

    const getStats = () => {
        axios.get(`${baseUrl}/stats`).then(res => {
            updateStats({
                total: res.data.total,
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

    return [stats, addUrl, message, resetAll, info]
}