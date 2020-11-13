package com.example.planets;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
@RequestMapping(path="/planets")
public class MainPlanetController {
  @Autowired
  private PlanetRepository planetRepository;

  @PostMapping(path="/add")
  public @ResponseBody String addNewPlanet (@RequestParam String name
      , @RequestParam String type) {

    PlanetInfo n = new PlanetInfo();
    n.setName(name);
    n.setType(type);
    planetRepository.save(n);
    return "Saved";
  }

  @GetMapping(path="/all")
  public @ResponseBody Iterable<PlanetInfo> getAllPlanets() {
    return planetRepository.findAll();
  }


}