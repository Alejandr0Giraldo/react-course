const Card = () => {
return (
    <div className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
        <figure className='relative mb-2 w-full h-4/5'>
            <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-sm m-2 px-3 py-0.5'>Dama</span>
            <img className='w-full h-full object-cover rounded-lg' src='https://sacosdelanaesli.com.co/wp-content/uploads/2022/09/saco-de-lana-tejido-mujer.jpeg' alt='Sacodama' />
            <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'>+</div>
        </figure>
        <p className='flex justify-between'>
            <span className='text-sm font-light'>Saco dama</span>
            <span className='text-lg font-medium'>$65.000</span>
        </p>
    </div>
    
    )
}

export default Card