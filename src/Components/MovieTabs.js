import React from 'react'
import classNames from 'classnames'

const MovieTabs = ({ sort_by, updateSortBy }) => {

    const popularity = [
        "popularity.desc",
        "revenue.desc",
        "vote_average.desc"
    ]

    const handleClick = value => () => updateSortBy(value)

    return (

        <ul className="tabs nav nav-pills" >
            {
                popularity.map(item => {
                    const wrapperClasses = classNames('nav-link', {
                        'active': sort_by === item
                    })

                    return (
                        <li className="nav-item" >
                            <div className={wrapperClasses}
                                onClick={handleClick(item)}
                            >
                                {item.replace(".", " ")}
                            </div>
                        </li>
                    )
                })
            }

        </ul>
    )
}

export default MovieTabs
