import { Crown, ShieldCheck, Sparkles } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type TeamMember = {
  key: string
  name: string
  nativeName: string
  role: string
  nativeRole: string
  image: string
}

const Team = () => {
  const { t } = useTranslation('about')

  const MANAGEMENT_TEAM: TeamMember[] = [
    {
      key: 'afzal',
      name: 'Muhammad Afzal',
      nativeName: 'محمد افضل',
      role: t('team.members.afzal.role'),
      nativeRole: 'چیف ایگزیکٹو آفیسر',
      image: '/team/afzal-ceo.png',
    },

    {
      key: 'gulzar',
      name: 'Hafiz Gulzar Ahmed Khalid',
      nativeName: 'حافظ گلزار احمد خالد',
      role: t('team.members.gulzar.role'),
      nativeRole: 'چیف آپریٹنگ آفیسر',
      image: '/team/gulzar-coo.png',
    },
    {
      key: 'amanat',
      name: 'Haji Amanat Ali',
      nativeName: 'حاجی امانت علی',
      role: t('team.members.amanat.role'),
      nativeRole: 'چیئرمین',
      image: '/team/amanat-chairman.png',
    },
    {
      key: 'sajjad',
      name: 'Sajjad Ahmed',
      nativeName: 'سجاد احمد',
      role: t('team.members.sajjad.role'),
      nativeRole: 'چیف فنانشل آفیسر',
      image: '/team/Sajjad-cfo.png',
    },
  ]

  return (
    <section className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-10">
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(11,59,110,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(11,59,110,0.045)_1px,transparent_1px)] bg-size-[42px_42px]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/60 bg-amber-500/10 px-4 py-1.5 text-sm font-bold uppercase tracking-[0.18em] text-amber-700">
            <Sparkles className="size-4 text-amber-600" aria-hidden="true" />
            <span>{t('team.badge')}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-[#061832] sm:text-4xl lg:text-5xl">
            {t('team.headingPart1')}{' '}
            <span className="text-[#e2a22c]">YES TIME GLOBAL.</span>
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {t('team.subtitle')}
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-4">
          {MANAGEMENT_TEAM.map((member, index) => (
            <article
              key={member.key}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-md transition-all delay-100 duration-300 ease-out hover:-translate-y-2 hover:border-[#e2a22c] hover:shadow-xl hover:shadow-amber-500/15"
            >
              <div className="relative aspect-8/9 overflow-hidden bg-[#061832]">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#061832]/85 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 flex size-9 items-center justify-center rounded-full border border-[#f5c54e]/60 bg-[#061832]/85 text-sm font-bold text-[#f5c54e] backdrop-blur-sm">
                  0{index + 1}
                </span>
              </div>

              <div className="relative px-5 pb-6 pt-5 text-center">
                <div className="mx-auto -mt-10 flex size-11 items-center justify-center rounded-xl border-4 border-white bg-[#061832] text-[#f5c54e] shadow-lg">
                  {index === 1 ? <Crown className="size-5" aria-hidden="true" /> : <ShieldCheck className="size-5" aria-hidden="true" />}
                </div>

                <h3 className="mt-4 text-lg font-bold leading-snug text-[#061832]">
                  {member.name}
                </h3>
                <p className="mt-1 text-base font-semibold text-[#a97916]" dir="rtl">
                  {member.nativeName}
                </p>

                <div className="mx-auto my-4 h-px w-12 bg-[#e2a22c] transition-all duration-300 group-hover:w-20" />

                <p className="text-sm font-bold leading-5 text-slate-700">
                  {member.role}
                </p>
                <p className="mt-1 text-sm leading-6 text-slate-500" dir="rtl">
                  {member.nativeRole}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team;
