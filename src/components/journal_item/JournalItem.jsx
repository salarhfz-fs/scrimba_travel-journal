import location_pin from '../../assets/location-pin.svg'

import './JournalItem.css'

export default function JournalItem({
    img_url,
    location,
    google_maps_url,
    title,
    start_date,
    end_date,
    description
}) {
    return (
        <article>
            <img
                alt={title}
                className='journal-item-img'
                src={`/${img_url}`}
            />
            <div className="journal-item-main">
                <section className='journal-item-heading'>
                    <div className="journal-item-location">
                        <div className="location">
                            <img alt='location pin' src={location_pin} />
                            <span>{location.toUpperCase()}</span>
                        </div>
                        <div className="map">
                            <a
                                rel='noopenner noreferer'
                                target='_blank'
                                href={google_maps_url}
                            >View on Google Maps</a>
                        </div>
                    </div>
                    <h2>{title}</h2>
                </section>
                <section className='journal-item-body'>
                    <h4>{start_date} - {end_date}</h4>
                    <p>{description}</p>
                </section>
            </div>
        </article>
    )
}