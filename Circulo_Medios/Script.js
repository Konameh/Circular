function Frame__0_0(ID){PlayLoop(80, 120);

}

function Frame__1_0(ID){Stop();

}

function Frame__2_0(ID){Stop();

}

function Frame__3_0(ID){Stop();

}

function Frame__4_0(ID){Stop();

}

function Frame__5_0(ID){Stop();

}

function Frame__6_0(ID){Stop();

}

function Frame__7_0(ID){Stop();

}

function ButtonUNVIAJEPORMIMUNDO_OnClick(){GotoSceneNameAndPlay("mundo 1", 0);

SoundPlay("musicadefondo",true);

}

function BOTTONOBRAS_OnClick(){GotoSceneNameAndPlay("introdeobras", 0);
SoundPlay("sonidogrillo", false); 
}

function Button1_OnClick(){GotoSceneNameAndPlay("Escena1", 0);
SoundPlay("grito", false); 
}

function ButtonCreditos_OnClick(){GotoSceneNameAndPlay("creditos", 0);
SoundPlay("grito", false); 
}

function controldesonido_OnChange(Value){SoundSetVolume("musicadefondo" , Value * 2.2);

}

function Controlbotongrito_OnChange(Value){SoundSetVolume("grito" , Value * 2.4);
}

function botonvideo_OnClick(){GotoSceneNameAndPlay("video", 0);
}

function SIGUEINTEOBRA_OnClick(){GotoSceneNameAndPlay("OBRA2", 0);
}

function Buttonvuelve_OnClick(){GotoSceneNameAndPlay("mundo 1", 0);
}

function NEXTOBRA2_OnClick(){GotoSceneNameAndPlay("OBRA3", 0);
}

function Buttonbra2ç_OnClick(){GotoSceneNameAndPlay("OBRAS", 0);
}

function ButtonBRA3_OnClick(){GotoSceneNameAndPlay("OBRA4", 0);
}

function BOTTONOBRA3VUELVE_OnClick(){GotoSceneNameAndPlay("OBRA2", 0);
}

function BOTONVUELVE3_OnClick(){GotoSceneNameAndPlay("OBRA3", 0);
}

function Button3vvvuelve_OnClick(){GotoSceneNameAndPlay("creditos", 0);
}

function espacioparaboton_OnClick(){GotoSceneNameAndPlay("mundo 1", 0);
SoundPlay("grito", false); 
}

function ESPACIOAREUREADY_OnClick(){GotoSceneNameAndPlay("OBRAS", 0);
}

function botonplay_OnClick(){VideoPlay("agujero");
}

function botonpause_OnClick(){VideoPause("agujero");
}

function controlsonidodefondoenvideo_OnChange(Value){SoundSetVolume("musicadefondo" , Value * 2.2);
}

function botonvuelvealmenu_OnClick(){GotoSceneNameAndPlay("mundo 1", 0);
}

