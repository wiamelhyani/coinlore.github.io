import React from 'react';
import Chart from '../components/shared/Chart';
import { Divider } from 'primereact/divider';
import { Card } from 'primereact/card';

const Home = () => {
  return (
    <div>
      <header
        className='masthead text-center text-white'
        style={{
          backgroundImage: `url("https://www.coinlore.com/img/news/how-do-you-earn-interest-on-crypto-in-coindepo.jpg")`,
        }}
      >
        <div className='masthead-content'>
          <div className='container px-5'>
            <h1 className='masthead-heading mb-0'>Cryptocurrency market </h1>
            <h2 className='masthead-subheading mb-0'>cap</h2>
            <a className='btn btn-dark btn-xl rounded-pill mt-5' href='/'>
              Learn More
            </a>
          </div>
        </div>
      </header>
      <section id='scroll'>
        <div className='container px-5'>
          <div className='row gx-5 align-items-center'>
            <div className='col-lg-6 order-lg-2'>
              <div className='p-5'>
                <img
                  style={{ height: '400px', width: '100%' }}
                  className='img-fluid rounded-circle'
                  src='https://www.fxmag.pl/images/cache/article_filter/images/articles/co-pokaze-marcowa-inflacja-w-usa-amerykanski-rynek-elektryzowany-przez-ipo-coinbase.jpg'
                  alt='img'
                />
              </div>
            </div>
            <div className='col-lg-6 order-lg-1'>
              <div className='p-5'>
                <h2 className='display-4'>Cryptocurrency market cap?</h2>
                <p>
                  Cryptocurrency market capitalization (market cap) refers to
                  the total value of a particular cryptocurrency that is
                  currently in circulation.It is calculated by multiplying the
                  current market price of a cryptocurrency by the total number
                  of coins or tokens that have been issued.The total market
                  capitalization of all cryptocurrencies for today is
                  $1,247,491,691,520
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container px-5'>
          <div className='row gx-5 align-items-center'>
            <div className='col-lg-6'>
              <div className='p-5'>
                <img
                  style={{ height: '400px', width: '100%' }}
                  className='img-fluid rounded-circle'
                  src='https://img.capital.com/imgs/articles/1200x627x1/shutterstock_1931406863_5.jpg'
                  alt='img'
                />
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='p-5'>
                <h2 className='display-4'>How cryptocurrency works?</h2>
                <p>
                  Cryptocurrencies are digital assets that are secured by
                  cryptography. They use decentralized networks to transfer and
                  store value, and the transactions are recorded in a publicly
                  distributed ledger known as the blockchain. Transactions are
                  verified by network nodes and recorded in a public distributed
                  ledger known as the blockchain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className='container px-5'>
          <div className='row gx-5 align-items-center'>
            <div className='col-lg-6 order-lg-2'>
              <div className='p-5'>
                <img
                  style={{ height: '400px', width: '100%' }}
                  className='img-fluid rounded-circle'
                  src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9I4_GhcYF7M62oN7YNmuHfoj4O3VcE1ujjQ&usqp=CAU'
                  alt='img'
                />
              </div>
            </div>
            <div className='col-lg-6 order-lg-1'>
              <div className='p-5'>
                <h2 className='display-4'>what affects crypto prices?</h2>
                <p>
                  Cryptocurrency prices are affected by a variety of factors,
                  including market supply and demand, news, and government
                  regulations. For example, news about developments in a
                  cryptocurrency’s underlying technology can affect its price,
                  as can news about government regulations.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-md-6 m-6'>
            <h4>Bitcoin and Binance coin price from Jan 2023 - July 2023</h4>
            <p>(in U.S. dollars)</p>
            <Chart />
          </div>
          <div className='col-md-4'>
            <Card style={{ backgroundColor: 'white', color: 'black' }}>
              <div className='info'>
                <div className='fw-bold'>Release date</div>
                <p>Novembre 2023</p>
              </div>
              <Divider />
              <div className='infoBox'>
                <div className='infoBox__title'>In cooperation with</div>
                <div className='overflow-hidden'>
                  <div className='width40'>
                    <div className='partner-container'>
                      <a
                        className='display-inline-block margin-top-5'
                        href='https://www.coingecko.com.'
                        target='_blank'
                        rel='noopener noreferrer'
                        data-gtm='stat__dataPartnerLogoLink'
                      >
                        <img
                          height='50'
                          className='partner-logo display-inline-block max-height-50'
                          src='https://cdn.statcdn.com/Source/27873.png'
                          alt='CoinGecko'
                        />
                      </a>
                      <p className='partner-title infoBox__text hidden'>
                        CoinGecko
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Divider />
              <div className='info'>
                <div className='fw-bold'>Region</div>
                <p> Morocco</p>
              </div>
              <Divider />
              <div className='info'>
                <div className='fw-bold'>Special properties</div>
                <p>
                  Monthly figures are as of the end of that particular month;
                  Opening price
                </p>
              </div>
              <Divider />
              <div className='info'>
                <div className='fw-bold'>Supplementary notes</div>
                <p>Figures have been rounded.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Home;
