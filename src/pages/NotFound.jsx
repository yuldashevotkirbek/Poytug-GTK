import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';

export const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center px-6 py-12">
        <div className="text-7xl font-extrabold text-blue-600">404</div>
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Sahifa topilmadi</h1>
        <p className="mt-2 text-gray-600">Kiritilgan manzil noto'g'ri yoki sahifa ko'chirilgan.</p>
        <div className="mt-8">
          <Link to="/">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6">Bosh sahifaga qaytish</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;


