
import { cosineSimilarity } from '@/helpers/cosine-similarity'
import { withMethods } from '@/lib/api-middlewares/with-methods'
import { db } from '@/lib/db'
import { openai } from '@/lib/openai'
import { NextApiRequest, NextApiResponse } from 'next'
import { z } from 'zod'

const reqSchema = z.object({
  element: z.string().max(20),
  name: z.string().max(100),
  margin: z.string().max(100),
  color: z.string().max(100),
  padding: z.string().max(100),
})

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body as unknown

  const apiKey = req.headers.authorization
  if (!apiKey) {
    return res.status(401).json({ error: 'Unauthorized' })
  }

  try {
    const { element, name, margin, color, padding } = reqSchema.parse(body)

    const validApiKey = await db.apiKey.findFirst({
      where: {
        key: apiKey,
        enabled: true,
      },
    })

    if (!validApiKey) {
      return res.status(401).json({ error: 'Unauthorized' })
    }

    const start = new Date()

    const duration = new Date().getTime() - start.getTime()

    // Persist request
    await db.apiRequest.create({
      data: {
        duration,
        method: req.method as string,
        path: req.url as string,
        status: 200,
        apiKeyId: validApiKey.id,
        usedApiKey: validApiKey.key,
      },
    })

    const component = `const ${name} = styled('${element}',{ margin: '${margin}', backgroundColor: '${color}', padding: '${padding}')})`

    return res.status(200).json({ success: true, component })
  } catch (error) {
    if (error instanceof z.ZodError) {
      return res.status(400).json({ error: error.issues })
    }
    console.log(error)
    return res.status(500).json({ error: 'Internal server error' })
  }
}

export default withMethods(['POST'], handler)