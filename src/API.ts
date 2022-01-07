// hier kommt alles was mit firebase interagiert rein wie get.document oder delete.document aus den views immer mit der api setzten und nicht direkt mit firebase
// alles was mit firebase interagiert in der api muss async sein und ein await haben

// try catch am besten im frontend damit die errors besser displayed werden können

export async function test(test: string): Promise<void> {
  try {
    await getStuff();
  } catch (e) {
    console.log({ error: e });
  }
}
