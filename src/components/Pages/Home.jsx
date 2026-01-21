import PersonalCard from '../PersonalCard'
import ExperienceCard from '../ExperienceCard'
import RecentProjectsCard from '../RecentProjectsCard'

const Home = () => {
  return (
    <main className="mx-auto max-w-7xl px-6 py-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        <PersonalCard />
        <ExperienceCard />
        <RecentProjectsCard />
      </div>
    </main>
  )
}

export default Home
