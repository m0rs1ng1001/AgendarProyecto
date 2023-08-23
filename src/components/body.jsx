import React from 'react';

const Citas = () => {
  return (
    <div className='h-screen flex items-center justify-center '>
      <div className='border border-solid bg-gray-300 p-4 rounded-md '>
        <h1 className='text-2xl font-bold mb-4 text-center'>AGENDAMIENTO DE CITAS</h1>
        <div className='bg-gray-200 p-4 rounded-md'>
          <form action="" className='grid gap-10 grid-cols-2 grid-rows- md:grid-cols-4'>
            <label htmlFor="" className='block text-sm font-medium text-black w-1/4 pr-4'>
                PLACA
            </label>
              <input
                type="text"
                id='placa'
                className='w-full p-2 border border-gray-300 rounded-md'
                placeholder='Escribe aquí...'
                required
              />

<label htmlFor="" className='block text-sm font-medium text-black w-1/4 pr-4 text-center'>
                TIPO VEHICULO
            </label>
              <select name="" id=""className='w-[100%] p-2 rounded  text-gray-600' >
                <option value="tipoVehiculo">selecciona el tipo de vehiculo</option>
                <option value="camioneta">carro</option>
                <option value="moto">moto</option>

              </select>

<label htmlFor="" className='block text-sm font-medium text-black w-1/4 pr-4'>
                MODELO
            </label>
              <input
                type="text"
                id='placa'
                className='w-full p-2 border text-black rounded-md'
                placeholder='Escribe aquí...'
                required
              />

<label htmlFor="" className='block text-sm font-medium text-black w-1/4 pr-4'>
                MARCA
            </label>
              <input
                type="text"
                id='placa'
                className='w-full p-2 border text-black rounded-md'
                placeholder='Escribe aquí...'
                required
              />

<label htmlFor="" className='block text-sm font-medium text-black w-1/4 pr-4'>
                FECHA
            </label>
              <input
                type="text"
                id='placa'
                className='w-full p-2 border border-gray-300 rounded-md'
                placeholder='Escribe aquí...'
                required
              />

<label htmlFor="" className='block text-sm font-medium text-black w-1/4 pr-4'>
                HORA
            </label>
              <input
                type="text"
                id='placa'
                className='w-full p-2 border border-gray-300 rounded-md'
                placeholder='Escribe aquí...'
                required
              />
          </form>

          <div className='grid gap-[25rem] p-20 grid-cols-2 md:grid-cols-2 mt-[2rem] '>
            <input type="text-box" name="" id=""  placeholder='Observaciones (Opcional)' className='rounded' />

           <input type="button" value="AGENDAR" className='bg-white p-1 rounded'/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Citas;
