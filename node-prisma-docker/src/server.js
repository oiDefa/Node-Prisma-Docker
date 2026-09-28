const express = require(express);
const { PrismaClient } = require(@prismaclient);

const app = express();
const prisma = new PrismaClient();

app.use(express.json());

app.post(users, async (req, res) = {
  try {
    const user = await prisma.user.create({
      data req.body
    });

    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error Erro ao criar usuário });
  }
});

app.get(users, async (req, res) = {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.put(usersid, async (req, res) = {
  try {
    const user = await prisma.user.update({
      where {
        id Number(req.params.id)
      },
      data req.body
    });

    res.json(user);
  } catch (error) {
    res.status(404).json({ error Usuário não encontrado });
  }
});

app.delete(usersid, async (req, res) = {
  try {
    await prisma.user.delete({
      where {
        id Number(req.params.id)
      }
    });

    res.json({ message Usuário excluído });
  } catch (error) {
    res.status(404).json({ error Usuário não encontrado });
  }
});

app.listen(3000, () = {
  console.log(API rodando na porta 3000);
});