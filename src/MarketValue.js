import './MarketValue.css'

function MarketValue(){
    return (
        <div className='container'>
            <div className='statistic'>
                <div className='label'> MARKET CAP</div>
                <span className='value'>$ 165 T</span>
            </div>

            <div className='statistic'>
                <div className='label'> EXCHANGE VOL</div>
                <span className='value'>$ 64.51B</span>
            </div>

            <div className='statistic'>
                <div className='label'> ASSETS</div>
                <span className='value'>2,229</span>
            </div>

            <div className='statistic'>
                <div className='label'> EXCHANGES</div>
                <span className='value'>73</span>
            </div>

            <div className='statistic'>
                <div className='label'> MARKETS</div>
                <span className='value'>9,208</span>
            </div>

            <div className='statistic'>
                <div className='label'> BTC DOM INDEX</div>
                <span className='value'>52.3%</span>
            </div>
        </div>
    )
}

export default MarketValue;