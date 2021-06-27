import React from 'react';
import Card from '../components/Card/Card';
import '../components/Card/Card.css';

function About() {
  return (
    <div className="cards">
      <h1 className="text-5xl mb-12">Check out these EPIC destinations!</h1>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div className="rounded-xl overflow-hidden shadow-lg">
          <img className="w-full" src="../images/img-5.jpg" alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>

        <div className="rounded-xl overflow-hidden shadow-lg">
          <img className="w-full" src="../images/img-1.jpg" alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #photography
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #travel
            </span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              #winter
            </span>
          </div>
        </div>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        <Card
          title="Travel"
          source="../images/img-9.jpg"
          description="Explore the hidden waterfall deep in the Amazon jungle"
          path="/services"
          alternative="Mountain"
          category="#travel"
        />

        <Card
          title="Travel"
          source="../images/img-8.jpg"
          description="Explore the hidden waterfall deep in the Amazon jungle"
          path="/services"
          alternative="Mountain"
          category="#travel"
        />

        <Card
          title="Travel"
          source="../images/img-9.jpg"
          description="Explore the hidden waterfall deep in the Amazon jungle"
          path="/services"
          alternative="Mountain"
          category="#travel"
        />
      </div>
    </div>
  );
}

export default About;
