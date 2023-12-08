import React, { useState, useEffect } from 'react';
import { Table as UITable, TableHeader, TableRow, TableHead, TableBody, TableCell } from "../../../../../@/components/ui/table";
import LoadingSpinner from '../../../../../components/LoadingSpinner/LoadingSpinner';

const Table = () => {
  const [priceList, setPriceList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://urlsbackend-project.onrender.com/getAllProduct");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPriceList(data.message);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    fetchData();

    return () => {
      // Cleanup event listener when component unmounts
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const headers = [
    { label: 'Article No', icon: 'text-blue-300' },
    { label: 'Product/Service', icon: 'text-green-300' },
    { label: 'inPrice', icon: '' },
    { label: 'Price', icon: '' },
    { label: 'Unit', icon: '' },
    { label: 'in Stock', icon: '' },
    { label: 'Description', icon: '' },
  ];

  const maxColumns =
            screenWidth < 600 ? 2 :
            screenWidth < 700 ? 4 :
            screenWidth < 800 ? 6 :7;


  return (
    <UITable>
      <TableHeader>
        <TableRow>
          {headers.slice(0, maxColumns).map((header, index) => (
            <TableHead key={index}>
              <div className='flex items-center gap-1 '>
                <span>{header.label}</span>
                {header.icon && (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 ${header.icon}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                  </svg>
                )}
              </div>
            </TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {loading ? (
          <TableRow>
            <TableCell colSpan={maxColumns}>
              <LoadingSpinner /> {/* Render your loading component here */}
            </TableCell>
          </TableRow>
        ) : error ? (
          <TableRow>
            <TableCell colSpan={maxColumns} className="text-red-500">
              Error loading data: {error}
            </TableCell>
          </TableRow>
        ) : (
          priceList?.map((row, rowIndex) => (
            <TableRow key={rowIndex}>
              {row.slice(0, maxColumns).map((cell, cellIndex) => (
                <TableCell key={cellIndex}>
                  <h1 className='text-[12px] border border-sky-200 rounded-lg p-1 px-2' style={{ borderRadius: "16px" }}>{cell}</h1>
                </TableCell>
              ))}
              <div className='pl-4'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-blue-400">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
            </TableRow>
          ))
        )}
      </TableBody>
    </UITable>
  );
};

export default Table;
