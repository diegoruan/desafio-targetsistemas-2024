Eu ligaria o primeiro interruptor e deixaria ligado por um tempo, após isso, desligaria e ligaria o segundo interruptor.

Ao conferir uma das salas seguiria esta logica:

se (lampada = ligada) entao
    É o segundo interruptor
senao
    se (lampada = quente) entao
        É o primeiro interruptor
    senao
        É o terceiro interruptor
    fimse
fimse

Apos a conferencia descartaria o interruptor já descoberto e deixaria um dos interruptores que sobraram ligado e o outro desligado.

Ao conferir a segunda sala seguiria esta logica:

se (lampada = ligada) entao
    É o interruptor ligado
senao
    É o interruptor desligado

Assim descobriria todos os interruptores.
