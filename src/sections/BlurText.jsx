import { motion } from 'framer-motion'

function getOffset(direction) {
  if (direction === 'top') return { x: 0, y: -18 }
  if (direction === 'bottom') return { x: 0, y: 18 }
  if (direction === 'left') return { x: -18, y: 0 }
  if (direction === 'right') return { x: 18, y: 0 }
  return { x: 0, y: -18 }
}

export default function BlurText({
  text,
  delay = 0,
  animateBy = 'words',
  direction = 'top',
  className = '',
}) {
  const units = animateBy === 'chars' ? [...text] : text.split(' ')
  const { x, y } = getOffset(direction)

  return (
    <span className={className}>
      {units.map((unit, index) => (
        <motion.span
          key={`${unit}-${index}`}
          initial={{ opacity: 0, filter: 'blur(8px)', x, y }}
          whileInView={{ opacity: 1, filter: 'blur(0px)', x: 0, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: delay / 1000 + index * 0.06,
          }}
          style={{ display: 'inline-block', whiteSpace: 'pre' }}
        >
          {unit}
          {animateBy === 'words' && index < units.length - 1 ? ' ' : ''}
        </motion.span>
      ))}
    </span>
  )
}
