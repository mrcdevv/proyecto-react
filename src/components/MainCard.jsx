function MainCard(props) {
  return (
    <>
      <div class="relative grid h-[40rem] w-full max-w-[28rem] flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700">
        <div class="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
          <div class="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div class="relative p-6 py-14 px-6 md:px-12">
          <h2 class="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            How we design and code open-source projects?
          </h2>
          <h5 class="mb-4 block font-sans text-xl font-semibold leading-snug tracking-normal text-gray-400 antialiased">
            Tania Andrew
          </h5>
          <img
            alt={props.title}
            src={props.}
            class="relative inline-block h-[74px] w-[74px] rounded-full border-2 border-white object-cover object-center"
          />
        </div>
      </div>
      <div class="w-full pt-5 px-4 mb-8 mx-auto ">
        <div class="text-sm text-gray-700 py-1">
          Made with <a class="text-gray-700 font-semibold" href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents" target="_blank">Material Tailwind</a> by <a href="https://www.creative-tim.com?ref=tailwindcomponents" class="text-gray-700 font-semibold" target="_blank"> Creative Tim</a>.
        </div>
      </div>

    </>
  )
}

export default MainCard