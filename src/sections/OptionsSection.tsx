import { Icon } from '@iconify/react';

const Option = ({text, icon} : {text:string, icon:string} ) => {
    return (
        <div className="flex items-center gap-2">
            <Icon icon={icon} className='text-[40px] text-primary' />
            <p className='font-extrabold text-primary font-mono text-[20px]'>{text}</p>
        </div>
    )
}

const OptionsSection = () => {
  return (
    <div className="p-8 flex w-full justify-evenly bg-secondary">
      <Option text='Soin Complet Auto' icon='bxs:car-mechanic' />
      <Option text='Diagnostic Express' icon='mdi:car-search' />
      <Option text='Service Pièces de Confiance' icon='fa6-brands:sellcast' />
      <Option text='Académie Mécanique' icon='ic:baseline-school' />
    </div>
  )
}

export default OptionsSection
